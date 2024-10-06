const button = document.querySelector('button');
const table = document.querySelector('table');
const rowCountElement = document.querySelector('p');
button.addEventListener('click', generateNewRow);
function generateNewRow() {
    const newRow = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
        const randomNum = Math.floor(Math.random() * 10); // Satunnainen luku välillä 0-9
        const newCell = document.createElement('td');
        newCell.textContent = randomNum;
        newRow.appendChild(newCell);
    }
    table.appendChild(newRow);
    updateRowCount();
}
