jQuery(function ($) {

  // After Chrome user script
  setTimeout(function () {
    var browserBot = new BrowserBot();

    var $table = $('#fixture table');

    // Call vendorPropName() before style.userSelect = ...
    $table.css('user-select');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    if ($table.css('cursor') === 'cell') {
      $('<div style="background: #0f0">Checking <strong>installed</strong> script...</div>').prependTo(document.body);
    } else {
      $('<div style="background: #f00">Checking <strong>development</strong> script...</div>').prependTo(document.body);

      $('<script src="../cellect.user.js">').appendTo(document.body);
    }

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);
  });
});
