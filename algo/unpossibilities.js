import { Grid } from "../Grid.js";

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function possibilitieTable(grid) {
    const possibilities = Grid.voidGrid();
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            const squareContent = grid.getSquare(x, y);
            if (squareContent !== null) {
                possibilities[y][x] = [squareContent];
                continue;
            }
            let squarePossibilities = [...digits];
            digits.forEach(digit => {
                if (
                    grid.getRow(y).includes(digit)
                    || grid.getColumn(x).includes(digit)
                    || grid.digitsInSameBlock(x, y).includes(digit)
                ) { squarePossibilities = squarePossibilities.filter(el => el !== digit); }
            });
            possibilities[y][x] = squarePossibilities;
        }
    }
    return possibilities;
}
