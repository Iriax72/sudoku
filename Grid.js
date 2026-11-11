export class Grid {
    constructor (grid) {
        this.grid = grid;
    }

    static voidGrid() {
        return [
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
        ];
    }

    isCompleted() {
        return this.grid.every(
            row => row.every(
                square => square !== null
            )
        );
    }

    getSquare(x, y) {
        return this.grid[y][x];
    }

    setValue(x, y, value) {
        this.grid[y][x] = value;
    }

    getRow(y) {
        return this.grid[y];
    }

    getColumn(x) {
        const col = [];
        this.grid.forEach(row => {
            col.push(row[x]);
        })
        return col;
    }

    getBlockOf(x, y) {
        const block = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        const startX = Math.floor(x / 3) * 3;
        const startY = Math.floor(y / 3) * 3;
        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 3; i++) {
                block[j][i] = this.grid[startY + j][startX + i];
            }
        }
        return block;
    }

    /*
    getBlocks() {
        return [
            this.getBlockOf(0, 0), this.getBlockOf(3, 0), this.getBlockOf(6, 0),
            this.getBlockOf(0, 3), this.getBlockOf(3, 3), this.getBlockOf(6, 3),
            this.getBlockOf(0, 6), this.getBlockOf(3, 6), this.getBlockOf(6, 6)
        ]
    }
    */

    digitsInSameBlock(x, y) {
        const ret = [];
        const block = this.getBlockOf(x, y);
        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 3; i++) {
                const digit = block[j][i];
                if (digit !== null) {
                    ret.push(digit);
                }
            }
        }
        return ret;
    } // digitInSameBlock pourrait être optimisé: Il affectue une boucle impriquéeen appelant blockOf, pour ensuite réefeftuer la meme boucle.
}