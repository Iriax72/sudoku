import { Grid } from "./Grid.js";
import { resolveByPossibilities } from "./algo/possibilities.js";

const resolveBtn = document.querySelector('#resolve-btn');
const testChexbox = document.querySelector('#test');

const n = null;
const gridTest = new Grid([
    [n, 1, n, 5, 2, n, 4, 3, n],
    [n, n, 8, n, n, 6, n, n, n],
    [5, n, 3, 7, 9, n, 2, n, n],
    [n, 2, 7, n, n, 9, n, n, 5],
    [n, 3, 6, 2, 4, n, n, n, 7],
    [9, n, 4, n, 7, 3, n, 6, n],
    [n, 7, n, n, 8, n, n, 1, n],
    [n, n, n, 9, 6, n, 7, n, 4],
    [n, n, n, 3, n, n, 6, n, n]
]);

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

resolveBtn.addEventListener('click', () => {
    if (testChexbox.checked) {
        alert(JSON.stringify(resolveByPossibilities(gridTest)));
        return;
    }
    const grid = [];
    const HTMLGrid = document.querySelector('#HTMLGrid');
    const HTMLRows = [...HTMLGrid.querySelectorAll('tr')];
    HTMLRows.forEach(HTMLRow => {
        const row = [];
        const tds = [...HTMLRow.querySelectorAll('td')];
        tds.forEach(td => {
            const value = td.querySelector('input').value
            row.push(value === '' ? null : Number(value));
        });
        grid.push(row);
    });

    alert(JSON.stringify(grid));
    alert(JSON.stringify(resolveByPossibilities(new Grid(grid))));
});