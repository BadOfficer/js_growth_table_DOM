'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

changeRowBtnsState();
changeColBtnsState();

appendRowBtn.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const newRowCopy = table.rows[0].cloneNode(true);

  table.tBodies[0].append(newRowCopy);

  changeRowBtnsState();
});

appendColBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  const newCol = document.createElement('td');
  const tableRows = table.rows;

  [...tableRows].forEach((row) => {
    const colCopy = newCol.cloneNode();

    row.append(colCopy);
  });

  changeColBtnsState();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.rows[table.rows.length - 1].remove();

  changeRowBtnsState();
});

removeColBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  const tableRows = table.rows;

  [...tableRows].forEach((row) => {
    row.cells[row.cells.length - 1].remove();
  });

  changeColBtnsState();
});

function changeRowBtnsState() {
  appendRowBtn.disabled = table.rows.length >= 10;
  removeRowBtn.disabled = table.rows.length <= 2;
}

function changeColBtnsState() {
  appendColBtn.disabled = table.rows[0].cells.length >= 10;
  removeColBtn.disabled = table.rows[0].cells.length <= 2;
}
