// ==UserScript==
// @description Select tables like cells in a spreadsheet. Double-click to select rows, columns, or a whole table.
// @name Cellect
// @namespace http://nottheoilrig.com
// @version 1.0
// ==/UserScript==

function innerHeight(elt) {
  var style = getComputedStyle(elt);

  return elt.offsetHeight - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth);
}

function innerWidth(elt) {
  var style = getComputedStyle(elt);

  return elt.offsetWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
}

function offset(elt) {
  var bcr = elt.getBoundingClientRect();

  return { left: bcr.left + pageXOffset, top: bcr.top + pageYOffset };
}

function off(target, type, listener) {
  target.removeEventListener(type, listener, true);
}

function on(target, type, listener) {
  target.addEventListener(type, listener, true);
}

// http://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document

// http://stackoverflow.com/questions/3680429/click-through-a-div-to-underlying-elements
var cellection = document.createElement('div');
cellection.style.background = 'rgba(135, 206, 235, .7)';
cellection.style.border = '3px double';
cellection.style.display = 'none';
cellection.style.pointerEvents = 'none';
cellection.style.position = 'absolute';
cellection.style.zIndex = 32767;

document.body.appendChild(cellection);

var textarea = document.createElement('textarea');
textarea.style.position = 'absolute';
textarea.style.top = '-32767px';
document.body.appendChild(textarea);

var anchor, anchorOffset, table,
  single = false, double = false, timeout, tableOffset,
  colWise = false, rowWise = false;

// Firefox collapseFix eq 0, Chrome collapseFix eq 1
var elt = document.body.appendChild(document.createElement('table'));
elt.style.borderCollapse = 'collapse';
elt.style.visibility = 'hidden';

elt = elt.appendChild(document.createElement('tr'));
elt = elt.appendChild(document.createElement('td'));
elt.style.border = '1px solid';
elt.style.padding = 0;
elt.style.width = '1px';

var collapseFix = innerWidth(elt) - 1;

function cancelDouble(evt) {
  if (!evt.relatedTarget || !this.contains(evt.relatedTarget)) {
    off(this, 'mouseout', cancelDouble);

    single = false;
  }
}

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
          cellection.style.display = 'none';
        }
      } else {
        cellection.style.display = 'none';
      }

      on(table, 'mouseover', mouseenter);
      on(document, 'mouseup', mouseup);
    }
  } else {
    cellection.style.display = 'none';

    anchor = evt.target;
    while (anchor.nodeName.toLowerCase() !== 'td' && anchor.nodeName.toLowerCase() !== 'th' && anchor !== this) {
      anchor = anchor.parentNode;
    }

    if (anchor.nodeName.toLowerCase() === 'td' || anchor.nodeName.toLowerCase() === 'th') {
      anchorOffset = offset(anchor);

      table = anchor.parentNode;
      while (table.nodeName.toLowerCase() !== 'table') {
        table = table.parentNode;
      }

      on(table, 'mouseover', mouseenter);
      on(document, 'mouseup', mouseup);

      clearTimeout(timeout);
      timeout = setTimeout(function () { single = false }, 400);

      if (single) {
        double = true;
        tableOffset = offset(table);
      } else {
        single = true;
        double = false;

        on(anchor, 'mouseout', cancelDouble);
      }

      colWise = rowWise = false;
    }
  }
}

function mouseenter(evt) {
  var focus = evt.target;
  while (focus.nodeName.toLowerCase() !== 'td' && focus.nodeName.toLowerCase() !== 'th' && focus !== this) {
    focus = focus.parentNode;
  }

  if (focus.nodeName.toLowerCase() === 'td' || focus.nodeName.toLowerCase() === 'th') {
    if (!evt.relatedTarget || !focus.contains(evt.relatedTarget)) {
      if (focus === anchor) {
        table.style.cursor = '';
        table.style.userSelect = '';
        table.style.MozUserSelect = '';
        table.style.WebkitUserSelect = '';

        cellection.style.display = 'none';
      } else {
        redraw(focus);
      }
    }
  }
}

function mouseleave(evt) {
  if (!evt.relatedTarget || !this.contains(evt.relatedTarget)) {
    cellection.style.display = 'none';
  }
}

function mouseup(evt) {
  off(this, 'mouseup', mouseup);

  table.style.cursor = '';
  table.style.userSelect = '';
  table.style.MozUserSelect = '';
  table.style.WebkitUserSelect = '';

  off(table, 'mouseover', mouseenter);
  off(table, 'mouseout', mouseleave);

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

      textarea.value = rows.join('\n');
      textarea.select();
    }
  }
}

function redraw(focus) {
  table.style.cursor = 'cell';
  table.style.userSelect = 'none';
  table.style.MozUserSelect = 'none';
  table.style.WebkitUserSelect = 'none';

  on(table, 'mouseout', mouseleave);

  getSelection().collapseToStart();

  var focusOffset = offset(focus);

  if ((colWise || double && focus.cellIndex !== anchor.cellIndex) && !rowWise) {
    var height = innerHeight(table) - 2,
      top = tableOffset.top + parseFloat(getComputedStyle(table, null).borderTopWidth) - 2;
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

    var height = bottomTop - topTop + innerHeight(bottom) - 2,
      top = topTop + parseFloat(getComputedStyle(top, null).borderTopWidth) - 2;
  }

  if ((rowWise || double && focus.parentNode.rowIndex !== anchor.parentNode.rowIndex) && !colWise) {
    var left = tableOffset.left + parseFloat(getComputedStyle(table, null).borderLeftWidth) - 2,
      width = innerWidth(table) - 2;
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

    var left = leftLeft + parseFloat(getComputedStyle(left, null).borderLeftWidth) - 2,
      width = rightLeft - leftLeft + innerWidth(right) - 2;
  }

  if (collapseFix && getComputedStyle(table, null).borderCollapse === 'collapse') {
    height += 1;
    width += 1;
  }

  cellection.style.display = '';
  cellection.style.height = height + 'px';
  cellection.style.left = left + 'px';
  cellection.style.top = top + 'px';
  cellection.style.width = width + 'px';
}

on(document.body, 'mousedown', mousedown);
