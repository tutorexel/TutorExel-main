// DEBUG VERSION - Google Apps Script for TutorExel Forms
// This version includes extensive logging to help identify issues

// Helper function to extract parameters from different request formats
function extractParameters(e) {
  var params = {};
  
  // Try different parameter formats
  if (e.parameter) {
    Object.assign(params, e.parameter);
  }
  if (e.parameters) {
    // e.parameters contains arrays, so we need to extract the first value
    Object.keys(e.parameters).forEach(function(key) {
      if (e.parameters[key] && e.parameters[key].length > 0) {
        params[key] = e.parameters[key][0];
      }
    });
  }
  
  return params;
}

// Test function to verify script deployment
function doGet(e) {
  console.log('doGet called - script is working');
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'Script is working',
      timestamp: new Date().toISOString(),
      method: 'GET'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Main form processing function
function doPost(e) {
  console.log('=== FORM SUBMISSION DEBUG START ===');
  console.log('Raw event object keys:', Object.keys(e));
  
  try {
    // Enhanced parameter extraction to handle different form data formats
    var params = extractParameters(e);
    var files = e.files || {};
    
    // Detailed logging
    console.log('Extracted params:', JSON.stringify(params));
    console.log('Files object keys:', Object.keys(files));
    console.log('Raw e.parameter:', JSON.stringify(e.parameter));
    console.log('Raw e.parameters:', JSON.stringify(e.parameters));
    console.log('Raw e.files:', JSON.stringify(Object.keys(e.files || {})));

    // CONFIG
    var SHEET_ID = '1rh6CZdhhvfMzlMv81zpTH7iQGMOpdb2XbdI7lpi9SBg';
    var SHEET_NAME = 'Tutor applications sheet';
    var NOTIFY = 'info@tutorexel.com';
    var FOLDER_ID = '1XtwbHV-no6z2aJsk6UaDdQMBON8i2fyj';

    console.log('Config - Sheet ID:', SHEET_ID);
    console.log('Config - Folder ID:', FOLDER_ID);

    // Test sheet access
    try {
      var ss = SpreadsheetApp.openById(SHEET_ID);
      var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
      console.log('Sheet access successful - Sheet name:', sheet.getName());
    } catch (sheetAccessErr) {
      console.error('Sheet access failed:', sheetAccessErr.toString());
      throw new Error('Cannot access spreadsheet: ' + sheetAccessErr.toString());
    }

    // Test folder access
    try {
      var folder = FOLDER_ID ? DriveApp.getFolderById(FOLDER_ID) : DriveApp.getRootFolder();
      console.log('Folder access successful - Folder name:', folder.getName());
    } catch (folderAccessErr) {
      console.error('Folder access failed:', folderAccessErr.toString());
      throw new Error('Cannot access Drive folder: ' + folderAccessErr.toString());
    }

    // Build a normalized record
    var now = new Date();
    var record = {
      submittedAt: params.submittedAt || now.toISOString(),
      form: params.form || 'unknown',
      data: JSON.stringify(params)
    };

    console.log('Record created:', JSON.stringify(record));

    // File processing variables
    var fileLink = '';
    var fileId = '';
    var attachBlob = null;

    function saveBlobToFolder(blob, baseName) {
      try {
        console.log('Attempting to save blob with name:', baseName);
        console.log('Blob size:', blob.getBytes().length, 'bytes');
        console.log('Blob content type:', blob.getContentType());
        
        blob.setName(baseName);
        var saved = folder.createFile(blob);
        console.log('File created successfully - ID:', saved.getId());
        
        // Make link easily accessible
        try {
          saved.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          console.log('File sharing set successfully');
        } catch (shareErr) {
          console.log('Sharing permission not available: ' + shareErr.toString());
        }
        return saved;
      } catch (createErr) {
        console.error('Error creating file: ' + createErr.toString());
        throw createErr;
      }
    }

    // Handle file upload from multipart form data
    if (files && files.cv) {
      console.log('=== PROCESSING MULTIPART FILE ===');
      console.log('File object type:', typeof files.cv);
      console.log('File object keys:', Object.keys(files.cv));
      
      var baseName = 'TutorExel-' + (params.fullName || 'file') + '-' + now.getTime();
      console.log('Generated base name:', baseName);
      
      var savedA = saveBlobToFolder(files.cv, baseName);
      fileLink = savedA.getUrl();
      fileId = savedA.getId();
      console.log('Multipart file saved - URL:', fileLink, 'ID:', fileId);
      
      // Check file size for email attachment
      try {
        var fileSize = savedA.getSize();
        console.log('File size:', fileSize, 'bytes');
        if (fileSize && fileSize <= 20 * 1024 * 1024) {
          attachBlob = savedA.getBlob();
          if (attachBlob) {
            attachBlob.setName(savedA.getName());
          }
          console.log('File will be attached to email');
        } else {
          console.log('File too large for email attachment');
        }
      } catch (sizeErr) {
        console.log('Could not determine file size: ' + sizeErr.toString());
      }
    } 
    // Handle base64 encoded file
    else if (params.cvBase64) {
      console.log('=== PROCESSING BASE64 FILE ===');
      console.log('Base64 data length:', params.cvBase64.length);
      console.log('File name:', params.cvName);
      console.log('File type:', params.cvType);
      
      try {
        var bytes = Utilities.base64Decode(params.cvBase64);
        console.log('Base64 decoded successfully - bytes length:', bytes.length);
        
        var mime = params.cvType || 'application/octet-stream';
        var name = params.cvName || ('TutorExel-' + now.getTime());
        var blob = Utilities.newBlob(bytes, mime, name);
        console.log('Blob created from base64 data');
        
        var baseName = 'TutorExel-' + (params.fullName || 'file') + '-' + now.getTime();
        var savedB = saveBlobToFolder(blob, baseName);
        fileLink = savedB.getUrl();
        fileId = savedB.getId();
        console.log('Base64 file saved - URL:', fileLink, 'ID:', fileId);
        
        // Check file size for email attachment
        try {
          var fileSize = savedB.getSize();
          console.log('Base64 file size:', fileSize, 'bytes');
          if (fileSize && fileSize <= 20 * 1024 * 1024) {
            attachBlob = savedB.getBlob();
            if (attachBlob) {
              attachBlob.setName(savedB.getName());
            }
            console.log('Base64 file will be attached to email');
          } else {
            console.log('Base64 file too large for email attachment');
          }
        } catch (sizeErr) {
          console.log('Could not determine file size: ' + sizeErr.toString());
        }
      } catch (decodeErr) {
        console.error('Error decoding base64 file: ' + decodeErr.toString());
        throw new Error('Invalid base64 file data: ' + decodeErr.toString());
      }
    } else {
      console.log('=== NO FILE FOUND ===');
      console.log('No file found in request - neither multipart nor base64');
      console.log('Available params keys:', Object.keys(params));
      console.log('Available files keys:', Object.keys(files));
    }

    // Append to sheet
    try {
      console.log('=== WRITING TO SHEET ===');
      var lastCol = sheet.getLastColumn() || 1;
      console.log('Last column:', lastCol);
      
      var headerRange = sheet.getRange(1, 1, 1, Math.max(5, lastCol));
      var headers = headerRange.getValues()[0];
      console.log('Current headers:', JSON.stringify(headers));
      
      // Check if headers need to be created
      if (!headers || headers.length === 0 || !headers[0] || headers[0] === '') {
        console.log('Creating headers');
        sheet.getRange(1, 1, 1, 5).setValues([['submittedAt', 'form', 'data', 'cvUrl', 'cvFileId']]);
      }
      
      // Append the new row
      var rowData = [record.submittedAt, record.form, record.data, fileLink || '', fileId || ''];
      console.log('Appending row data:', JSON.stringify(rowData));
      sheet.appendRow(rowData);
      console.log('Sheet updated successfully');
    } catch (sheetErr) {
      console.error('Error writing to sheet: ' + sheetErr.toString());
      throw sheetErr;
    }

    // Email notification
    try {
      console.log('=== SENDING EMAIL ===');
      var subject = 'New ' + (record.form === 'tutor-application' ? 'Tutor Application' : 'Contact Enquiry');
      var body = 'Submitted at: ' + record.submittedAt + '\n\n' +
                 'Form Type: ' + record.form + '\n\n' +
                 'Data: ' + JSON.stringify(params, null, 2) + '\n\n' +
                 (fileLink ? ('CV: ' + fileLink + '\n') : '');
      
      console.log('Email subject:', subject);
      console.log('Email body length:', body.length);
      console.log('Email recipient:', NOTIFY);
      
      var emailOpts = { name: 'TutorExel Forms' };
      if (attachBlob) {
        console.log('Adding file attachment to email');
        emailOpts.attachments = [attachBlob];
      }
      
      GmailApp.sendEmail(NOTIFY, subject, body, emailOpts);
      console.log('Email sent successfully');
    } catch (emailErr) {
      console.error('Error sending email: ' + emailErr.toString());
      // Don't throw here - we still want to return success if file was saved
    }

    console.log('=== FORM SUBMISSION DEBUG END - SUCCESS ===');
    return ContentService
      .createTextOutput(JSON.stringify({ 
        ok: true, 
        cvUrl: fileLink, 
        cvFileId: fileId,
        message: 'Application submitted successfully',
        debug: {
          hasFile: !!(fileLink),
          fileSize: attachBlob ? attachBlob.getBytes().length : 0,
          timestamp: now.toISOString()
        }
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error('=== FORM SUBMISSION DEBUG END - ERROR ===');
    console.error('Error message: ' + err.toString());
    console.error('Error stack: ' + err.stack);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        ok: false, 
        error: err.toString(),
        message: 'Failed to process application',
        debug: {
          timestamp: new Date().toISOString(),
          errorType: err.name || 'Unknown'
        }
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}