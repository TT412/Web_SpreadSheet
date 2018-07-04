function doGet() { 
  return HtmlService.createTemplateFromFile("テストページ").evaluate(); 
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
