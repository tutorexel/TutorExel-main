Google Apps Script webhook for TutorExel forms

Overview
- Two React forms post to Google Apps Script web apps.
- Data is appended to two Google Sheets and an email is sent to nanki.anup@gmail.com.

Steps (do once per form)
1) Create a Google Sheet per form (Contact, Tutor Applications).
2) Tools -> Script editor. Replace Code.gs with the script below.
3) In the script, set SHEET_ID to your sheet ID and SHEET_NAME to the tab name.
4) Deploy -> New deployment -> Type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Copy the Web app URL.
5) In this repo, create `.env` with:
   VITE_CONTACT_FORM_ENDPOINT="<contact web app URL>"
   VITE_TUTOR_FORM_ENDPOINT="<tutor web app URL>"
6) Rebuild/redeploy the site so env vars are available to the client.

Apps Script (Code.gs)
function doPost(e) {
  try {
    var params = e.parameter; // string values
    var files = e.files || {}; // possible uploaded files

    // CONFIG
    var SHEET_ID = 'PUT_SHEET_ID_HERE';
    var SHEET_NAME = 'Sheet1'; // or a specific tab
    var NOTIFY = 'nanki.anup@gmail.com';

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    // Build a normalized record
    var now = new Date();
    var record = {
      submittedAt: params.submittedAt || now.toISOString(),
      form: params.form || 'unknown',
      data: JSON.stringify(params),
    };

    // If a file was uploaded (e.g., 'cv'), save to Drive and add link
    var fileLink = '';
    if (files.cv) {
      var blob = files.cv; // Blob
      var folder = DriveApp.getRootFolder();
      var saved = folder.createFile(blob);
      saved.setName('TutorExel-' + (params.fullName || 'file') + '-' + now.getTime());
      fileLink = saved.getUrl();
      record.cvUrl = fileLink;
    }

    // Append to sheet (auto header on first run)
    var headers = sheet.getRange(1,1,1,sheet.getLastColumn()||1).getValues()[0];
    if (!headers || headers.length === 0 || headers[0] === '') {
      sheet.getRange(1,1,1,4).setValues([[ 'submittedAt','form','data','cvUrl' ]]);
    }
    sheet.appendRow([ record.submittedAt, record.form, record.data, record.cvUrl || '' ]);

    // Email notification
    var subject = 'New ' + (record.form === 'tutor-application' ? 'Tutor Application' : 'Contact Enquiry');
    var body = 'Submitted at: ' + record.submittedAt + '\n\n' +
               'Data: ' + JSON.stringify(params, null, 2) + '\n\n' +
               (fileLink ? ('CV: ' + fileLink + '\n') : '');
    GmailApp.sendEmail(NOTIFY, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

Notes
- For the Contact form you likely don’t upload files; for Tutor Applications, the field name for the file must be 'cv'.
- If you prefer a single sheet with two tabs, duplicate the deployment with different SHEET_ID/SHEET_NAME.
- To restrict access, set Web app to "Anyone with link" or behind reCAPTCHA Enterprise; current setup is public endpoint.

