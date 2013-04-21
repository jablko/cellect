jQuery(function ($) {

  // After Chrome user script
  setTimeout(function () {
    var browserBot = new BrowserBot();

    var $table = $('table');

    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseover', true);

    if ($table.css('cursor') === 'cell') {
      $('<div>Already installed.</div>').insertBefore('h2:eq(0),h2:eq(5)');
    } else {
      if (window.chrome && window.chrome.webstore.install) {
        $('<button>Add to Chrome</button>')
          .on('click', function () { chrome.webstore.install() })
          .insertBefore('h2:eq(0),h2:eq(5)');
      }

      $('<script src="https://raw.github.com/jablko/cellect/master/cellect.js">').appendTo(document.body);
    }

    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseup', true);
  });
});
