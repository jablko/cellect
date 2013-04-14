(function () {

// http://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document

// http://stackoverflow.com/questions/3680429/click-through-a-div-to-underlying-elements
var $cellection = $('<div style="background: rgba(135, 206, 235, .7); border: 3px double; display: none; pointer-events: none; position: absolute; z-index: 32767">').appendTo(document.body),
  $textarea = $('<textarea style="position: absolute; top: -32767px">').appendTo(document.body),
  anchor, anchorOffset, table,
  single = false, double = false, timeout, tableOffset,
  colWise = false, rowWise = false;

// Firefox collapseFix eq 0, Chrome collapseFix eq 1
var collapseFix = $('<td style="border: 1px solid; padding: 0; width: 1px">').appendTo($('<tr>').appendTo($('<table style="border-collapse: collapse; visibility: hidden">').appendTo('body'))).innerWidth() - 1;

function cancelDouble() { single = false }

function mousedown(evt) {
  if (evt.shiftKey) {
    if (anchor.nodeName.toLowerCase() === 'td' || anchor.nodeName.toLowerCase() === 'th') {
      if (table.contains(evt.target) && !anchor.contains(evt.target)) {
        var focus = evt.target;
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

    anchor = evt.target;
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

      colWise = rowWise = false;
    }
  }
}

function mouseenter(evt) {
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

function mouseup(evt) {
  $(table)
    .css({
      cursor: '',
      'user-select': '' })
    .off({
      mouseenter: mouseenter,
      mouseleave: mouseleave });

  if (table.contains(evt.target) && !anchor.contains(evt.target)) {
    var focus = evt.target;
    while (focus.nodeName.toLowerCase() !== 'td' && focus.nodeName.toLowerCase() !== 'th' && focus !== table) {
      focus = focus.parentNode;
    }

    if (focus.nodeName.toLowerCase() === 'td' || focus.nodeName.toLowerCase() === 'th') {
      function callback(row) {
        function callback(cell) {
          result = cell.textContent.trim().replace(/\s+/g, ' ');

          // http://tools.ietf.org/html/rfc4180
          if (result.indexOf('"') !== -1) {
            return '"' + result.replace(/"/g, '""') + '"';
          } else {
            return result;
          }
        }

        if ((rowWise || double && focus.parentNode.rowIndex !== anchor.parentNode.rowIndex) && !colWise) {
          var cells = Array.prototype.map.call(row.cells, callback);

          rowWise = true;
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

      if ((colWise || double && focus.cellIndex !== anchor.cellIndex) && !rowWise) {
        var rows = Array.prototype.map.call(table.rows, callback);

        colWise = true;
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

  if ((colWise || double && focus.cellIndex !== anchor.cellIndex) && !rowWise) {
    var height = $(table).innerHeight() - 2,
      top = tableOffset.top + parseFloat($(table).css('border-top-width')) - 2;

    if ($(table).css('border-collapse') === 'collapse') {
      if (collapseFix) {
        height -= 2;
        top += 1;
      } else {
        height -= 1;
      }
    }
  } else {
    if (focusOffset.top > anchorOffset.top) {
      var bottom = focus,
        bottomTop = focusOffset.top,
        top = anchor,
        topTop = anchorOffset.top;
    } else {
      var bottom = anchor,
        bottomTop = anchorOffset.top,
        top = focus,
        topTop = focusOffset.top;
    }

    var height = bottomTop - topTop + $(bottom).innerHeight() - 2,
      top = topTop + parseFloat($(top).css('border-top-width')) - 2;

    if (collapseFix && $(table).css('border-collapse') === 'collapse') {
      height += 1;
    }
  }

  if ((rowWise || double && focus.parentNode.rowIndex !== anchor.parentNode.rowIndex) && !colWise) {
    var left = tableOffset.left + parseFloat($(table).css('border-left-width')) - 2,
      width = $(table).innerWidth() - 2;

    if ($(table).css('border-collapse') === 'collapse') {
      if (collapseFix) {
        left += 1;
        width -= 2;
      } else {
        width -= 1;
      }
    }
  } else {
    if (focusOffset.left > anchorOffset.left) {
      var left = anchor,
        leftLeft = anchorOffset.left,
        right = focus,
        rightLeft = focusOffset.left;
    } else {
      var left = focus,
        leftLeft = focusOffset.left,
        right = anchor,
        rightLeft = anchorOffset.left;
    }

    var left = leftLeft + parseFloat($(left).css('border-left-width')) - 2,
      width = rightLeft - leftLeft + $(right).innerWidth() - 2;

    if (collapseFix && $(table).css('border-collapse') === 'collapse') {
      width += 1;
    }
  }

  $cellection.css({
    display: '',
    height: height,
    left: left,
    top: top,
    width: width });
}

$(document.body).on('mousedown', mousedown);

  })();
