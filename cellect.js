// http://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document

// http://stackoverflow.com/questions/3680429/click-through-a-div-to-underlying-elements
var $cellection = $('<div style="background: rgba(70, 130, 180, .2); border: 3px double; display: none; pointer-events: none; position: absolute">').appendTo(document.body),
  $textarea = $('<textarea style="position: absolute; top: -32767px">').appendTo(document.body),
  anchor, anchorOffset, table,
  single = false, double = false, timeout, tableOffset;

function cancelDouble() { single = false }

function mousedown(event) {
  if (event.shiftKey) {
    if (anchor.nodeName.toLowerCase() === 'td' || anchor.nodeName.toLowerCase() === 'th') {
      if (table.contains(event.target) && !anchor.contains(event.target)) {
        var focus = event.target;
        while (focus.nodeName.toLowerCase() !== 'td' && focus.nodeName.toLowerCase() !== 'th' && focus !== table) {
          focus = focus.parentNode;
        }

        if (focus.nodeName.toLowerCase() === 'td' || focus.nodeName.toLowerCase() === 'th') {
          redraw(focus);
        } else {
          $cellection.css('display', 'none');
        }
      } else {
        $cellection.css('display', 'none');
      }

      $(table).on('mouseenter', 'td,th', mouseenter);
      $(document).one('mouseup', mouseup);
    }
  } else {
    $cellection.css('display', 'none');

    anchor = event.target;
    while (anchor.nodeName.toLowerCase() !== 'td' && anchor.nodeName.toLowerCase() !== 'th' && anchor !== this) {
      anchor = anchor.parentNode;
    }

    if (anchor.nodeName.toLowerCase() === 'td' || anchor.nodeName.toLowerCase() === 'th') {
      anchorOffset = $(anchor).offset();

      table = anchor.parentNode;
      while (table.nodeName.toLowerCase() !== 'table') {
        table = table.parentNode;
      }

      $(table).on('mouseenter', 'td,th', mouseenter);
      $(document).one('mouseup', mouseup);

      clearTimeout(timeout);
      timeout = setTimeout(cancelDouble, 400);

      if (single) {
        double = true;
        tableOffset = $(table).offset();
      } else {
        single = true;
        double = false;

        $(anchor).one('mouseleave', cancelDouble);
      }
    }
  }
}

function mouseenter(event) {
  if (this === anchor) {
    $(table).css({
      cursor: '',
      'user-select': '' });

    $cellection.css('display', 'none');
  } else {
    redraw(this);
  }
}

function mouseleave() { $cellection.css('display', 'none') }

function mouseup(event) {
  $(table)
    .css({
      cursor: '',
      'user-select': '' })
    .off({
      mouseenter: mouseenter,
      mouseleave: mouseleave });

  if (table.contains(event.target) && !anchor.contains(event.target)) {
    var focus = event.target;
    while (focus.nodeName.toLowerCase() !== 'td' && focus.nodeName.toLowerCase() !== 'th' && focus !== table) {
      focus = focus.parentNode;
    }

    if (focus.nodeName.toLowerCase() === 'td' || focus.nodeName.toLowerCase() === 'th') {
      function callback(row) {
        function callback(cell) { return cell.textContent }

        if (double && focus.parentNode.rowIndex !== anchor.parentNode.rowIndex) {
          var cells = Array.prototype.map.call(row.cells, callback);
        } else {
          if (focus.cellIndex > anchor.cellIndex) {
            var begin = anchor.cellIndex,
              end = focus.cellIndex;
          } else {
            var begin = focus.cellIndex,
              end = anchor.cellIndex;
          }

          var cells = Array.prototype.slice.call(row.cells, begin, end + 1).map(callback);
        }

        return cells.join('\t');
      }

      if (double && focus.cellIndex !== anchor.cellIndex) {
        var rows = Array.prototype.map.call(table.rows, callback);
      } else {
        if (focus.parentNode.rowIndex > anchor.parentNode.rowIndex) {
          var begin = anchor.parentNode.rowIndex,
            end = focus.parentNode.rowIndex;
        } else {
          var begin = focus.parentNode.rowIndex,
            end = anchor.parentNode.rowIndex;
        }

        var rows = Array.prototype.slice.call(table.rows, begin, end + 1).map(callback);
      }

      $textarea
        .val(rows.join('\n'))
        .select();
    }
  }
}

function redraw(focus) {
  $(table)
    .css({
      cursor: 'cell',
      'user-select': 'none' })
    .on('mouseleave', mouseleave);

  getSelection().collapseToStart();

  var focusOffset = $(focus).offset();

  if (double && focus.cellIndex !== anchor.cellIndex) {
    $cellection.css({
      height: $(table).outerHeight() - 2.5,
      top: tableOffset.top - 2.5 });
  } else {
    if (focusOffset.top > anchorOffset.top) {
      var bottom = focus,
        bottomTop = focusOffset.top,
        topTop = anchorOffset.top;
    } else {
      var bottom = anchor,
        bottomTop = anchorOffset.top,
        topTop = focusOffset.top;
    }

    $cellection.css({
      height: bottomTop - topTop + $(bottom).outerHeight() - 2.5,
      top: topTop - 2.5 });
  }

  if (double && focus.parentNode.rowIndex !== anchor.parentNode.rowIndex) {
    $cellection.css({
      left: tableOffset.left - 2.5,
      width: $(table).outerWidth() - 2.5 });
  } else {
    if (focusOffset.left > anchorOffset.left) {
      var leftLeft = anchorOffset.left,
        right = focus,
        rightLeft = focusOffset.left;
    } else {
      var leftLeft = focusOffset.left,
        right = anchor,
        rightLeft = anchorOffset.left;
    }

    $cellection.css({
      left: leftLeft - 2.5,
      width: rightLeft - leftLeft + $(right).outerWidth() - 2.5 });
  }

  $cellection.css('display', '');
}

$(document.body).on('mousedown', mousedown);
