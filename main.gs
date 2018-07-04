function doGet() { 
  return HtmlService.createTemplateFromFile("testPage").evaluate(); 
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function pageName() {
  return 'testPage.html';
}