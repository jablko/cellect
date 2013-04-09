// http://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document

// http://stackoverflow.com/questions/3680429/click-through-a-div-to-underlying-elements
var $cellection = $('<div style="background: rgba(70, 130, 180, .2); border: 3px double; display: none; pointer-events: none; position: absolute">').appendTo(document.body),
  $textarea = $('<textarea style="position: absolute; top: -32767px">').appendTo(document.body),
  anchor, anchorOffset, table;

function mousedown(event) {
  if (event.shiftKey) {
    if (anchor.nodeName.toLowerCase() === 'td' || anchor.nodeName.toLowerCase() === 'th') {
      if (table.contains(event.target) && !anchor.contains(event.target)) {
        var focus = event.target;
        while (focus.nodeName.toLowerCase() !== 'td' && focus.nodeName.toLowerCase() !== 'th' && focus !== table) {
          focus = focus.parentNode;
        }

        if (focus.nodeName.toLowerCase() === 'td' || focus.nodeName.toLowerCase() === 'th') {
          $(table)
            .css({
              cursor: 'cell',
              'user-select': 'none' })
            .on('mouseleave', mouseleave);

          getSelection().collapseToStart();

          var focusOffset = $(focus).offset();

          if (focusOffset.top > anchorOffset.top) {
            var bottom = focus,
              bottomTop = focusOffset.top,
              topTop = anchorOffset.top;
          } else {
            var bottom = anchor,
              bottomTop = anchorOffset.top,
              topTop = focusOffset.top;
          }

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
            display: '',
            height: bottomTop - topTop + $(bottom).outerHeight() - 2.5,
            left: leftLeft - 2.5,
            top: topTop - 2.5,
            width: rightLeft - leftLeft + $(right).outerWidth() - 2.5 });
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
    $(table)
      .css({
        cursor: 'cell',
        'user-select': 'none' })
      .on('mouseleave', mouseleave);

    getSelection().collapseToStart();

    var focusOffset = $(this).offset();

    if (focusOffset.top > anchorOffset.top) {
      var bottom = this,
        bottomTop = focusOffset.top,
        topTop = anchorOffset.top;
    } else {
      var bottom = anchor,
        bottomTop = anchorOffset.top,
        topTop = focusOffset.top;
    }

    if (focusOffset.left > anchorOffset.left) {
      var leftLeft = anchorOffset.left,
        right = this,
        rightLeft = focusOffset.left;
    } else {
      var leftLeft = focusOffset.left,
        right = anchor,
        rightLeft = anchorOffset.left;
    }

    $cellection.css({
      display: '',
      height: bottomTop - topTop + $(bottom).outerHeight() - 2.5,
      left: leftLeft - 2.5,
      top: topTop - 2.5,
      width: rightLeft - leftLeft + $(right).outerWidth() - 2.5 });
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
      if (focus.parentNode.rowIndex > anchor.parentNode.rowIndex) {
        var begin = anchor.parentNode.rowIndex,
          end = focus.parentNode.rowIndex;
      } else {
        var begin = focus.parentNode.rowIndex,
          end = anchor.parentNode.rowIndex;
      }

      $textarea
        .val(Array.prototype.slice.call(table.rows, begin, end + 1)
          .map(function (row) {
              if (focus.cellIndex > anchor.cellIndex) {
                var begin = anchor.cellIndex,
                  end = focus.cellIndex;
              } else {
                var begin = focus.cellIndex,
                  end = anchor.cellIndex;
              }

              return Array.prototype.slice.call(row.cells, begin, end + 1)
                .map(function (cell) {
                    return cell.textContent;
                  })
                .join('\t');
            })
          .join('\n'))
        .select();
    }
  }
}

$(document.body).on('mousedown', mousedown);
