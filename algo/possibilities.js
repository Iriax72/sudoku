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

export function resolveByPossibilities(grid) {
    let addedDigit = true
    while (!grid.isCompleted() && addedDigit) {
        addedDigit = false;
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (grid.getSquare(x, y) !== null) { continue; }
                let possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(digit => {
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
