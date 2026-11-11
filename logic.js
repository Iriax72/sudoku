import { Grid } from "./Grid.js";
import { resolveByPossibilities } from "./algo/possibilities.js";

const resolveBtn = document.querySelector('#resolve-btn');

const n = null;
const gridTest = [
    [n, 1, n, 5, 2, n, 4, 3, n],
    [n, n, 8, n, n, 6, n, n, n],
    [5, n, 3, 7, 9, n, 2, n, n],
    [n, 2, 7, n, n, 9, n, n, 5],
    [n, 3, 6, 2, 4, n, n, n, 7],
    [9, n, 4, n, 7, 3, n, 6, n],
    [n, 7, n, n, 8, n, n, 1, n],
    [n, n, n, 9, 6, n, 7, n, 4],
    [n, n, n, 3, n, n, 6, n, n]
];

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function remove(arrayRef, item) {
    const array = [...arrayRef];
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
        return array;
    } else {
        throw new Error(`L'élement ${item} null'a pas été trouvé dans l'array`);
    }
}

/*
function resolve(grid) {
    while (!grid.isCompleted() && addedDigit) {
        let addedDigit = false;
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (grid.getSquare(x, y) !== null) { continue; }
                let possibilities = [...digits];
                digits.forEach(digit => {
                    if (
                        grid.getRow(y).includes(digit)
                        || grid.getColumn(x).includes(digit)
                        || grid.digitsInSameBlock(x, y).includes(digit)
                    ) { possibilities = remove(possibilities, digit); }
                    if (possibilities.length === 1) {
                        grid.setValue(x, y, possibilities[0]);
                        addedDigit = true;
                    }
                });
            }
        }
    }
    return grid;
}
*/

resolveBtn.addEventListener('click', () => {
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

    alert(JSON.stringify(resolveByPossibilities(new Grid(gridTest))));
});