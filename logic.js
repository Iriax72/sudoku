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

function getRow(grid, rowNumber) {
    return grid[rowNumber];
}

function getColumn(grid, colNumber) {
    const col = [];
    grid.forEach(row => {
        col.push(row[colNumber]);
    })
    return col;
}

function getSquare(grid, x, y) {
    return grid[y][x];
}

function getBlock(grid, x, y) {
    const block = [
        [n, n, n],
        [n, n, n],
        [n, n, n]
    ];
    const startX = Math.floor(x / 3) * 3;
    const startY = Math.floor(y / 3) * 3;
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            block[j][i] = grid[startY + j][startX + i];
        }
    }
    return block;
}

function digitsInSameBlock(grid, x, y) {
    const ret = [];
    const block = getBlock(grid, x, y);
    for (let j = 0; j < block.length; j++) {
        for (let i = 0; i < block[j].length; i++) {
            const digit = block[j][i];
            if (digit !== null) {
                ret.push(digit);
            }
        }
    }
    return ret;
}

function isCompleted(grid) {
    return grid.every(row => row.every(square => square !== null));
}

function resolve(gridRef) {
    const grid = gridRef.map(row => [...row]);
    while (!isCompleted(grid)) {
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                if (grid[y][x] !== null) { continue; }
                let possibilities = [...digits];
                digits.forEach(digit => {
                    if (
                        getRow(grid, y).includes(digit)
                        || getColumn(grid, x).includes(digit)
                        || digitsInSameBlock(grid, x, y).includes(digit)
                    ) { possibilities = remove(possibilities, digit); }
                    if (possibilities.length === 1) {
                        grid[y][x] = possibilities[0];
                    }
                });
            }
        }
    }
    return grid;
}

resolveBtn.addEventListener('click', () => {
    const grid = [];
    const HTMLGrid = document.querySelector('#HTMLGrid');
    const HTMLRows = [...HTMLGrid.querySelectorAll('tr')];
    HTMLRows.forEach(HTMLRow => {
        const row = [];
        const tds = [...HTMLRow.querySelectorAll('td')];
        tds.forEach(td => {
            row.push(td.querySelector('input').value);
        });
        grid.push(row);
    });

    alert(JSON.stringify(resolve(grid)));
});