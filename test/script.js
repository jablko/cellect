test('East', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    $($table[0].rows[1].cells[2]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    //equal(getSelection(), 'e\tf');
  });

test('South', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[2].cells[1]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 114, 'height');
    equal($cellection.width(), 146, 'width');

    $($table[0].rows[2].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 114, 'height');
    equal($cellection.width(), 146, 'width');

    //equal(getSelection(), 'e\nh');
  });

test('West', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[0]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 195, 'width');

    $($table[0].rows[1].cells[0]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 195, 'width');

    //equal(getSelection(), 'd\te');
  });

test('North', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[0].cells[1]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 148, 'height');
    equal($cellection.width(), 146, 'width');

    $($table[0].rows[0].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 148, 'height');
    equal($cellection.width(), 146, 'width');

    //equal(getSelection(), 'b\ne');
  });

test('Mousedown', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).mouseenter();
    $($table[0].rows[1].cells[2]).mouseup();
    $(document.body).mousedown();

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Stay in cell', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    // Avoid double
    $($table[0].rows[1].cells[1]).mouseleave();
  });

test('Leave then return to cell', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).mouseenter();
    $($table[0].rows[1].cells[1]).mouseenter();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Leave table', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).mouseenter();
    $table.mouseleave();

    equal($cellection.css('display'), 'none', 'display eq none');

    $(document).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Leave then return to table', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).mouseenter();
    $table.mouseleave();
    $($table[0].rows[1].cells[2]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    $($table[0].rows[1].cells[2]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    //equal(getSelection(), 'e\tf');
  });

test('Enter table', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $(document.body).mousedown();
    $($table[0].rows[1].cells[1]).mouseenter();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[2]).mouseenter();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[2]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Shift click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).trigger(jQuery.Event('mousedown', { shiftKey: true }));

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    $($table[0].rows[1].cells[2]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    //equal(getSelection(), 'e\tf');
  });

test('Drag then shift click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[2].cells[1]).mouseenter();
    $($table[0].rows[2].cells[1]).mouseup();

    $($table[0].rows[1].cells[2]).trigger(jQuery.Event('mousedown', { shiftKey: true }));

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    $($table[0].rows[1].cells[2]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    //equal(getSelection(), 'e\tf');
  });

test('Shift drag', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[2].cells[1]).trigger(jQuery.Event('mousedown', { shiftKey: true }));
    $($table[0].rows[2].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    $($table[0].rows[1].cells[2]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    //equal(getSelection(), 'e\tf');
  });

test('Drag then shift click return to cell', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[2].cells[1]).mouseenter();
    $($table[0].rows[2].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).trigger(jQuery.Event('mousedown', { shiftKey: true }));

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Columns', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 251, 'width');

    $($table[0].rows[1].cells[2]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 251, 'width');

    //equal(getSelection(), 'c\td\ne\tf\nh\ti');
  });

test('Rows', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[2].cells[1]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 114, 'height');
    equal($cellection.width(), 300, 'width');

    $($table[0].rows[2].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 114, 'height');
    equal($cellection.width(), 300, 'width');

    //equal(getSelection(), 'd\te\tf\ng\th\ti');
  });

test('Whole table', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[2].cells[2]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 300, 'width');

    $($table[0].rows[2].cells[2]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 300, 'width');

    //equal(getSelection(), 'a\tb\tc\nd\te\tf\ng\th\ti');
  });

test('Double click then single click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mouseleave();

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    $($table[0].rows[1].cells[2]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 251, 'width');

    //equal(getSelection(), 'e\tf');
  });

test('Double click then shift click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).trigger(jQuery.Event('mousedown', { shiftKey: true }));

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 251, 'width');

    $($table[0].rows[1].cells[2]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 251, 'width');

    //equal(getSelection(), 'c\td\ne\tf\nh\ti');
  });

test('Shift click column-wise', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[1].cells[2]).mouseenter();
    $($table[0].rows[1].cells[2]).mouseup();

    $($table[0].rows[0].cells[0]).trigger(jQuery.Event('mousedown', { shiftKey: true }));

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 195, 'width');

    $($table[0].rows[0].cells[0]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 195, 'height');
    equal($cellection.width(), 195, 'width');

    //equal(getSelection(), 'a\tb\nd\te\ng\th');
  });

test('Shift click row-wise', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseup();
    $($table[0].rows[1].cells[1]).mousedown();
    $($table[0].rows[1].cells[1]).mouseleave();
    $($table[0].rows[2].cells[1]).mouseenter();
    $($table[0].rows[2].cells[1]).mouseup();

    $($table[0].rows[0].cells[0]).trigger(jQuery.Event('mousedown', { shiftKey: true }));

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 148, 'height');
    equal($cellection.width(), 300, 'width');

    $($table[0].rows[2].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 148, 'height');
    equal($cellection.width(), 300, 'width');

    //equal(getSelection(), 'a\tb\tc\nd\te\tf');
  });
