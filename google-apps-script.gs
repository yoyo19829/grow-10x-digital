/**
 * Bedifly – Lead capture endpoint for Google Sheets.
 *
 * Target sheet:
 * https://docs.google.com/spreadsheets/d/1sK0ZJ9RkJ8a1daKuZLonVDS5QGMUdjT6nPxjWBtOWLs/edit
 *
 * HOW TO SET UP
 * 1. Open the Google Sheet above.
 * 2. Extensions -> Apps Script.
 * 3. Delete any existing code and paste EVERYTHING in this file.
 * 4. Click Deploy -> New deployment -> type "Web app".
 *      - Description: Bedifly leads
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 5. Click Deploy, authorize, and copy the "Web app" URL
 *    (looks like https://script.google.com/macros/s/XXXX/exec).
 * 6. In v0/Vercel, set the env var VITE_GOOGLE_SHEETS_WEBHOOK_URL to that URL,
 *    then redeploy the site.
 *
 * If you change this script later, use Deploy -> Manage deployments -> Edit ->
 * New version so the same URL keeps working.
 */

// The ID from your sheet URL.
var SHEET_ID = "1sK0ZJ9RkJ8a1daKuZLonVDS5QGMUdjT6nPxjWBtOWLs";
// Tab name to write to. "Leads" will be created automatically if missing.
var SHEET_NAME = "Leads";

var HEADERS = ["Timestamp", "Name", "Company", "Email", "Mobile", "City"];

function getSheet_() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sheet;
}

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var sheet = getSheet_();
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.company || "",
      data.email || "",
      data.mobile || "",
      data.city || "",
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// Lets you open the URL in a browser to confirm it is live.
function doGet() {
  return json_({ ok: true, message: "Bedifly leads endpoint is running." });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
