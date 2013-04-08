// http://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document

// http://stackoverflow.com/questions/3680429/click-through-a-div-to-underlying-elements
var $cellection = $('<div style="background: rgba(70, 130, 180, .2); border: 3px double; display: none; pointer-events: none; position: absolute">').appendTo(document.body),
  $textarea = $('<textarea style="position: absolute; top: -32767px">').appendTo(document.body),
  anchor, offset, table;

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

          $cellection.css({
            display: '',
            height: focusOffset.top - offset.top + $(focus).outerHeight() - 2.5,
            width: focusOffset.left - offset.left + $(focus).outerWidth() - 2.5 });
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
    anchor = event.target;
    while (anchor.nodeName.toLowerCase() !== 'td' && anchor.nodeName.toLowerCase() !== 'th' && anchor !== this) {
      anchor = anchor.parentNode;
    }

    if (anchor.nodeName.toLowerCase() === 'td' || anchor.nodeName.toLowerCase() === 'th') {
      offset = $(anchor).offset();

      $cellection.css({
        display: 'none',
        left: offset.left - 2.5,
        top: offset.top - 2.5 });

      table = anchor.parentNode;
      while (table.nodeName.toLowerCase() !== 'table') {
        table = table.parentNode;
      }

      $(table).on('mouseenter', 'td,th', mouseenter);
      $(document).one('mouseup', mouseup);
    } else {
      $cellection.css('display', 'none');
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

    $cellection.css({
      display: '',
      height: focusOffset.top - offset.top + $(this).outerHeight() - 2.5,
      width: focusOffset.left - offset.left + $(this).outerWidth() - 2.5 });
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
      $textarea
        .val(Array.prototype.slice.call(table.rows, anchor.parentNode.rowIndex, focus.parentNode.rowIndex + 1)
          .map(function (row) {
              return Array.prototype.slice.call(row.cells, anchor.cellIndex, focus.cellIndex + 1)
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
