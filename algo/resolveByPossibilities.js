export function resolveByPossibilities(grid) {
    while (!grid.isCompleted()) {
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (grid.getSquare(x, y) !== null) { continue; }
                let possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(digit => {
                    if (
                        grid.getRow(y).includes(digit)
                        || grid.getColumn(x).includes(digit)
                        || grid.digitsInSameBlock(x, y).includes(digit)
                    ) { possibilities = possibilities.filter(value => value !== digit); }
                    if (possibilities.length === 1) {
                        grid.setValue(x, y, possibilities[0]);
                    }
                });
            }
        }
    }
    return grid;
}
