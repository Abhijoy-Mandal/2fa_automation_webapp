//var POST_URL = "YOUR WEBHOOK URL";





function doPost(e) {
  //var params = JSON.stringify(e)
  //var items = [];
  Logger.log("I was called")
  if(typeof e !== 'undefined')
  Logger.log(e.parameter);
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1")
  sheet.getRange(1, 1).setValue(e.parameter.Body)
  //return ContentService.createTextOutput(JSON.stringify(e))
  //var body="I was called";
  // items.push({
  //               "name": "coded",
  //               "value": body,
  //               "inline": false
  //               });
  // items.push({
  //               "name": "coded",
  //               "value": body,
  //               "inline": false
  //               });
  // var options = {
  //       "method": "post",
  //       "headers": {
  //           "Content-Type": "application/json",
  //       },
  //       "payload":  JSON.stringify({
  //           "content": body,
           
  //       })
  // };

  // UrlFetchApp.fetch(POST_URL, options);
  // var values = [31,32];
  // SpreadsheetApp.getActiveSheet().getRange("A3:B3").setValue(values);
  //return ContentService.createTextOutput("something Posted");
}
