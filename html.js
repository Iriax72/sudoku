const HTMLGrid = document.querySelector('#HTMLGrid');
for (let i = 0; i < 9; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 9; j++) {
        const square = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'number';
        square.appendChild(input);
        row.appendChild(square);
    }
    HTMLGrid.appendChild(row);
}
document.body.appendChild(HTMLGrid);