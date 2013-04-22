jQuery(function ($) {

  // After Chrome user script
  setTimeout(function () {
    var browserBot = new BrowserBot();

    var $table = $('table');

    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseover', true);

    if ($table.css('cursor') === 'cell') {
      $('<button class="btn btn-success" disabled>Already installed.</button>').insertBefore('h2:eq(0),h2:eq(5)');
    } else {
      if (window.chrome && window.chrome.webstore.install) {
        $('<button class="btn btn-primary">Add to Chrome</button>')
          .on('click', function () { chrome.webstore.install() })
          .insertBefore('h2:eq(0),h2:eq(5)');
      }

      $('<script src="https://raw.github.com/jablko/cellect/master/cellect.js">').appendTo(document.body);
    }

    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseup', true);
  });

  var $iframe = $('iframe');
  Popcorn.youtube($('<div>')
        .height($iframe.height())
        .width($iframe.width())
        .replaceAll($iframe)[0],
      $iframe.attr('src'))
    .subtitle({
      end: 8,
      start: 2,
      target: 'subtitles',
      text: 'Select tables' })
    .subtitle({
      end: 18,
      start: 9,
      target: 'subtitles',
      text: 'Copy and paste' })
    .subtitle({
      end: 32,
      start: 29,
      target: 'subtitles',
      text: 'Double click to select the whole table' })
    .subtitle({
      end: 36,
      start: 32,
      target: 'subtitles',
      text: 'Or select rows or columns' })
    .subtitle({
      end: 43,
      start: 37,
      target: 'subtitles',
      text: 'Shift click to extend the selection' });
});
