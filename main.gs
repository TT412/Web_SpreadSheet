function doGet(e) {
  if(!e.parameter.p) {
    return HtmlService.createTemplateFromFile("testPage").evaluate(); 
  } else {
    return HtmlService.createTemplateFromFile(e.parameter.p).evaluate();
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function pageName() {
  return 'testPage.html';
}

function getScriptUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}