let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)

let currentPlayer = "X"

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

function checkForWinner() {
    let isStalemate = true; // Assume a stalemate initially

    winningCombinations.forEach(function (combination) {
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
        if (check) {
            highlightCells(combination);
            alert(currentPlayer + " is the WINNER!");
            isStalemate = false; // If there's a winner, it's not a stalemate
        }
    });

    if (isStalemate && cells.every(cell => cell.innerText.trim() !== "")) {
        alert("It's a stalemate!");
    }
}

function highlightCells(combination) {
    combination.forEach(function (idx) {
        cells[idx].classList.add("highlight")
    })
}

cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (cell.innerText.trim() != "") return
        cell.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
        // alert("clicked")
    })
})