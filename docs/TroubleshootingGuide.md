# TutorExel Forms Troubleshooting Guide

## Issue: CV Upload Not Working in Tutor Application Form

### Summary of Changes Made

1. **Enhanced Google Apps Script** (`GoogleAppsScript.md`)
   - Added comprehensive logging for debugging
   - Improved parameter extraction to handle different form data formats
   - Enhanced error handling and reporting
   - Added file size and type validation

2. **Debug Version** (`GoogleAppsScript-Debug.md`)
   - Extensive logging for every step of the process
   - Detailed error reporting
   - Test function to verify script deployment

3. **Frontend Improvements**
   - Added console logging to track form submission process
   - Enhanced error handling in TeacherForm.jsx
   - Improved FormData debugging in formSubmit.js

### Step-by-Step Troubleshooting

#### Step 1: Deploy the Debug Version
1. Copy the code from `GoogleAppsScript-Debug.md`
2. Replace your current Google Apps Script with this debug version
3. Deploy as a new version
4. Update the `VITE_TUTOR_FORM_ENDPOINT` in your `.env` file if the URL changed

#### Step 2: Test the Script Deployment
1. Visit your Google Apps Script URL directly in a browser
2. You should see a JSON response indicating the script is working
3. If you get an error, check the script permissions and deployment settings

#### Step 3: Test Form Submission
1. Open your website and navigate to the tutor application form
2. Fill out the form and upload a CV file
3. Open browser developer tools (F12) and go to the Console tab
4. Submit the form and watch the console logs

#### Step 4: Check Google Apps Script Logs
1. Go to Google Apps Script editor
2. Click on "Executions" in the left sidebar
3. Find your recent execution and click on it to see detailed logs
4. Look for any error messages or unexpected behavior

### Common Issues and Solutions

#### Issue 1: "Script function not found" or 404 Error
**Solution:** 
- Ensure the script is deployed as a web app
- Make sure the execution is set to "Anyone" or "Anyone with Google account"
- Verify the deployment URL is correct in your `.env` file

#### Issue 2: File Not Being Processed
**Possible Causes:**
- File size too large (check browser network tab for failed uploads)
- Unsupported file type
- FormData not being constructed properly

**Debug Steps:**
1. Check browser console for file processing logs
2. Verify the file appears in the FormData entries log
3. Check Google Apps Script logs to see if file data is received

#### Issue 3: Permission Errors
**Solution:**
- Ensure the script has permission to access Google Drive and Gmail
- Check that the folder ID in the script is correct and accessible
- Verify the email address for notifications is correct

#### Issue 4: Base64 Encoding Issues
**Symptoms:** File uploads work sometimes but not others
**Solution:**
- The script now handles both multipart and base64 uploads
- Check console logs to see which method is being used
- Large files might fail base64 encoding due to memory limits

### Testing Checklist

- [ ] Script deploys without errors
- [ ] Direct script URL returns JSON response
- [ ] Form submission shows console logs
- [ ] File appears in FormData entries
- [ ] Google Apps Script execution logs show file processing
- [ ] File appears in Google Drive folder
- [ ] Email notification is sent
- [ ] Spreadsheet is updated with form data

### Configuration Verification

#### Google Apps Script Configuration
```javascript
var SHEET_ID = '1rh6CZdhhvfMzlMv81zpTH7iQGMOpdb2XbdI7lpi9SBg';
var SHEET_NAME = 'Tutor applications sheet';
var NOTIFY = 'info@tutorexel.com';
var FOLDER_ID = '1XtwbHV-no6z2aJsk6UaDdQMBON8i2fyj';
```

#### Environment Variables
```
VITE_CONTACT_FORM_ENDPOINT="https://script.google.com/macros/s/AKfycbwPO0tlfrS7M6VRqMwYycBQYALZb6tLf2eLtSabazE1nHthcNuKypHo657X6CHkxEK0/exec"
VITE_TUTOR_FORM_ENDPOINT="https://script.google.com/macros/s/AKfycbx7w7KiAqDKOVAhc4qYceK2g73Fsw3mAYZAF5vlNY2rNWseuQCmyybrzd40AKdfY3KT/exec"
```

### File Upload Specifications

#### Supported File Types
- PDF (.pdf)
- Microsoft Word (.doc, .docx)

#### File Size Limits
- Maximum upload: 50MB (Google Apps Script limit)
- Email attachment: 20MB (for safety, Gmail limit is 25MB)

#### File Naming Convention
- Format: `TutorExel-{fullName}-{timestamp}`
- Example: `TutorExel-John-Doe-1703123456789`

### Next Steps After Troubleshooting

1. **If everything works with debug version:**
   - Replace with the production version (GoogleAppsScript.md)
   - Remove console.log statements from frontend if desired

2. **If issues persist:**
   - Check Google Apps Script quotas and limits
   - Verify Google Drive API is enabled
   - Consider file size and type restrictions

3. **For production deployment:**
   - Test with various file types and sizes
   - Monitor error rates and user feedback
   - Set up proper error tracking

### Contact Information

If you continue to experience issues, please provide:
1. Browser console logs
2. Google Apps Script execution logs
3. Specific error messages
4. File details (size, type) that failed to upload