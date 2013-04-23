getSelection().addRange(document.createRange());

var browserBot = new BrowserBot();

test('East', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    equal($textarea.val(), 'e\tf');
  });

test('South', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 112, 'height');
    equal($cellection.width(), 146, 'width');

    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 112, 'height');
    equal($cellection.width(), 146, 'width');

    equal($textarea.val(), 'e\nh');
  });

test('West', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[0], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 135, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 197, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[0], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 135, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 197, 'width');

    equal($textarea.val(), 'd\te');
  });

test('North', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 31 }, 'offset');
    equal($cellection.height(), 146, 'height');
    equal($cellection.width(), 146, 'width');

    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 31 }, 'offset');
    equal($cellection.height(), 146, 'height');
    equal($cellection.width(), 146, 'width');

    equal($textarea.val(), 'b\ne');
  });

test('Mousedown', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    browserBot.triggerMouseEvent(document.body, 'mousedown', true);

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Stay in cell', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    // Avoid double
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
  });

test('Leave then return to cell', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseover', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Leave table', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0], 'mouseout', true);

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent(document, 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Leave then return to table', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    equal($textarea.val(), 'e\tf');
  });

test('Enter table', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    browserBot.triggerMouseEvent(document.body, 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseover', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Shift click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);

    browserBot.shiftKeyDown = true;
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mousedown', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    equal($textarea.val(), 'e\tf');

    browserBot.shiftKeyDown = false;
  });

test('Drag then shift click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseup', true);

    browserBot.shiftKeyDown = true;
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mousedown', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    equal($textarea.val(), 'e\tf');

    browserBot.shiftKeyDown = false;
  });

test('Shift drag', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);

    browserBot.shiftKeyDown = true;
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    equal($textarea.val(), 'e\tf');

    browserBot.shiftKeyDown = false;
  });

test('Drag then shift click return to cell', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseup', true);

    browserBot.shiftKeyDown = true;
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.shiftKeyDown = false;
  });

test('Columns', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 30 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 253, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 30 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 253, 'width');

    equal($textarea.val(), 'b\tc\ne\tf\nh\ti');
  });

test('Rows', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 134, top: 112 }, 'offset');
    equal($cellection.height(), 112, 'height');
    equal($cellection.width(), 306, 'width');

    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 134, top: 112 }, 'offset');
    equal($cellection.height(), 112, 'height');
    equal($cellection.width(), 306, 'width');

    equal($textarea.val(), 'd\te\tf\ng\th\ti');
  });

test('Whole table', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 134, top: 30 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 306, 'width');

    browserBot.triggerMouseEvent($table[0].rows[2].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 134, top: 30 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 306, 'width');

    equal($textarea.val(), 'a\tb\tc\nd\te\tf\ng\th\ti');
  });

test('Double click then single click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    equal($textarea.val(), 'e\tf');
  });

test('Double click then shift click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);

    browserBot.shiftKeyDown = true;
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mousedown', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 30 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 253, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 30 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 253, 'width');

    equal($textarea.val(), 'b\tc\ne\tf\nh\ti');

    browserBot.shiftKeyDown = false;
  });

test('Shift click column-wise', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    browserBot.shiftKeyDown = true;
    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mousedown', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 135, top: 30 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 197, 'width');

    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 135, top: 30 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 197, 'width');

    equal($textarea.val(), 'a\tb\nd\te\ng\th');

    browserBot.shiftKeyDown = false;
  });

test('Shift click row-wise', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseup', true);

    browserBot.shiftKeyDown = true;
    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mousedown', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 134, top: 31 }, 'offset');
    equal($cellection.height(), 146, 'height');
    equal($cellection.width(), 306, 'width');

    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 134, top: 31 }, 'offset');
    equal($cellection.height(), 146, 'height');
    equal($cellection.width(), 306, 'width');

    equal($textarea.val(), 'a\tb\tc\nd\te\tf');

    browserBot.shiftKeyDown = false;
  });

test('Shift click same column', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    browserBot.shiftKeyDown = true;
    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mousedown', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 30 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 146, 'width');

    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 30 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 146, 'width');

    equal($textarea.val(), 'b\ne\nh');

    browserBot.shiftKeyDown = false;
  });

test('Shift click same row', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[1], 'mouseup', true);

    browserBot.shiftKeyDown = true;
    browserBot.triggerMouseEvent($table[0].rows[1].cells[0], 'mousedown', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 134, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 306, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[0], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 134, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 306, 'width');

    equal($textarea.val(), 'd\te\tf');

    browserBot.shiftKeyDown = false;
  });

test('Quote', function () {
    var $table = $('<table><tr><td>a</td><td>"</td></tr></table>').appendTo('#fixture'),
    $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseup', true);

    equal($textarea.val(), 'a\t""""');

    $table.remove();
  });

test('Trim whitespace', function () {
    var $table = $('<table><tr><td>a</td><td> b\n</td></tr></table>').appendTo('#fixture'),
    $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseup', true);

    equal($textarea.val(), 'a\tb');

    $table.remove();
  });

test('Collapse whitespace', function () {
    var $table = $('<table><tr><td>a</td><td>b  \n\n  \n\n  c</td></tr></table>').appendTo('#fixture'),
    $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[0], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[0].cells[1], 'mouseup', true);

    equal($textarea.val(), 'a\tb c');

    $table.remove();
  });

test('Border collapse', function () {
    var $table = $('#fixture table').css('border-collapse', 'collapse'),
      $cellection = $('div:eq(-1)');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 185, top: 112 }, 'offset');
    equal($cellection.height(), 66, 'height');
    equal($cellection.width(), 252, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 185, top: 112 }, 'offset');
    equal($cellection.height(), 66, 'height');
    equal($cellection.width(), 252, 'width');

    $table.css('border-collapse', '');
  });

test('Border collapse whole table', function () {
    var $table = $('#fixture table').css('border-collapse', 'collapse'),
      $cellection = $('div:eq(-1)');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseup', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[2].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 135, top: 31 }, 'offset');
    equal($cellection.height(), 194, 'height');
    equal($cellection.width(), 302, 'width');

    browserBot.triggerMouseEvent($table[0].rows[2].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 135, top: 31 }, 'offset');
    equal($cellection.height(), 194, 'height');
    equal($cellection.width(), 302, 'width');

    $table.css('border-collapse', '');
  });

test('Box sizing', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    var $style = $([
      '<style>',
        '* {',
          'box-sizing: border-box;',
          '-moz-box-sizing: border-box;',
          '-webkit-box-sizing: border-box;',
        '}',
      '</style>'].join('')).appendTo(document.body);

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 184, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 249, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 184, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 249, 'width');

    $style.remove();
  });

test('Scroll', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    scrollBy(0, 75);

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    equal($textarea.val(), 'e\tf');
  });

test('Control', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    browserBot.controlKeyDown = true;
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'none', 'display eq none');

    browserBot.controlKeyDown = false;
  });

test('Right click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)'),
      $textarea = $('textarea');

    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mousedown', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[1], 'mouseout', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseover', true);
    browserBot.triggerMouseEvent($table[0].rows[1].cells[2], 'mouseup', true);

    browserBot.triggerMouseEvent(document.body, 'mousedown', true, 187, 113, 2);

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    ok(['auto', 'text'].indexOf($table.css('user-select')) !== -1, 'user-select in auto|text');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 186, top: 112 }, 'offset');
    equal($cellection.height(), 65, 'height');
    equal($cellection.width(), 253, 'width');

    deepEqual($textarea.offset(), { left: 187, top: 113 }, 'offset');

    equal($textarea.val(), 'e\tf');
  });
