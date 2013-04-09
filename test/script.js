test('East', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[0].cells[0]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[0].cells[1]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 79, 'height');
    equal($cellection.width(), 195, 'width');

    $($table[0].rows[0].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 79, 'height');
    equal($cellection.width(), 195, 'width');

    //equal(getSelection(), 'a\tb');
  });

test('South', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[0].cells[0]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[0]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 148, 'height');
    equal($cellection.width(), 47, 'width');

    $($table[0].rows[1].cells[0]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 148, 'height');
    equal($cellection.width(), 47, 'width');

    //equal(getSelection(), 'a\nc');
  });

test('West', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[1].cells[0]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 195, 'width');

    $($table[0].rows[0].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 110.5 }, 'offset');
    equal($cellection.height(), 67, 'height');
    equal($cellection.width(), 195, 'width');

    //equal(getSelection(), 'c\td');
  });

test('North', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[1].cells[1]).mousedown();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[0].cells[1]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 148, 'height');
    equal($cellection.width(), 146, 'width');

    $($table[0].rows[1].cells[0]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 182.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 148, 'height');
    equal($cellection.width(), 146, 'width');

    //equal(getSelection(), 'b\nd');
  });

test('Mousedown', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[0].cells[0]).mousedown();
    $($table[0].rows[0].cells[1]).mouseenter();
    $($table[0].rows[0].cells[1]).mouseup();
    $(document.body).mousedown();

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Stay in cell', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[0].cells[0]).mousedown();
    $($table[0].rows[0].cells[0]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Leave then return to cell', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[0].cells[0]).mousedown();
    $($table[0].rows[0].cells[1]).mouseenter();
    $($table[0].rows[0].cells[0]).mouseenter();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[0].cells[0]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Leave table', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[0].cells[0]).mousedown();
    $($table[0].rows[0].cells[1]).mouseenter();
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

    $($table[0].rows[0].cells[0]).mousedown();
    $($table[0].rows[0].cells[1]).mouseenter();
    $table.mouseleave();
    $($table[0].rows[0].cells[1]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 79, 'height');
    equal($cellection.width(), 195, 'width');

    $($table[0].rows[0].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 79, 'height');
    equal($cellection.width(), 195, 'width');

    //equal(getSelection(), 'a\tb');
  });

test('Enter table', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $(document.body).mousedown();
    $($table[0].rows[0].cells[0]).mouseenter();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[0].cells[1]).mouseenter();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[0].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');
  });

test('Shift click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[0].cells[0]).mousedown();
    $($table[0].rows[0].cells[0]).mouseup();
    $($table[0].rows[0].cells[1]).trigger(jQuery.Event('mousedown', { shiftKey: true }));

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 79, 'height');
    equal($cellection.width(), 195, 'width');

    $($table[0].rows[0].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 79, 'height');
    equal($cellection.width(), 195, 'width');

    //equal(getSelection(), 'a\tb');
  });

test('Drag then shift click', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[0].cells[0]).mousedown();
    $($table[0].rows[1].cells[0]).mouseenter();
    $($table[0].rows[1].cells[0]).mouseup();
    $($table[0].rows[0].cells[1]).trigger(jQuery.Event('mousedown', { shiftKey: true }));

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 79, 'height');
    equal($cellection.width(), 195, 'width');

    $($table[0].rows[0].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 79, 'height');
    equal($cellection.width(), 195, 'width');

    //equal(getSelection(), 'a\tb');
  });

test('Shift drag', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[0].cells[0]).mousedown();
    $($table[0].rows[0].cells[0]).mouseup();
    $($table[0].rows[1].cells[0]).trigger(jQuery.Event('mousedown', { shiftKey: true }));
    $($table[0].rows[0].cells[1]).mouseenter();

    equal($table.css('cursor'), 'cell', 'cursor eq cell');
    equal($table.css('user-select'), 'none', 'user-select eq none');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 79, 'height');
    equal($cellection.width(), 195, 'width');

    $($table[0].rows[0].cells[1]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'block', 'display eq block');
    deepEqual($cellection.offset(), { left: 133.5, top: 29.5 }, 'offset');
    equal($cellection.height(), 79, 'height');
    equal($cellection.width(), 195, 'width');

    //equal(getSelection(), 'a\tb');
  });

test('Drag then shift click return to cell', function () {
    var $table = $('#fixture table'),
      $cellection = $('div:eq(-1)');

    getSelection().collapseToStart = function () { ok(true, 'collapseToStart') };

    $($table[0].rows[0].cells[0]).mousedown();
    $($table[0].rows[1].cells[0]).mouseenter();
    $($table[0].rows[1].cells[0]).mouseup();
    $($table[0].rows[0].cells[0]).trigger(jQuery.Event('mousedown', { shiftKey: true }));

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');

    $($table[0].rows[0].cells[0]).mouseup();

    equal($table.css('cursor'), 'auto', 'cursor eq auto');
    equal($table.css('user-select'), 'auto', 'user-select eq auto');

    equal($cellection.css('display'), 'none', 'display eq none');
  });
