function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('MapTFE')
    .setTitle('Mappa turistica di Tenerife');
}
