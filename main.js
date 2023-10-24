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
    let winner = null // Initialize winner as null
    let winningCombination = null; // Initialize the winning combination as null
    console.log("im")
    winningCombinations.forEach(function (combination) {
        let check = combination.every(idx => cells[idx].innerText.trim() === currentPlayer);
        if (check) {
            winner = currentPlayer; // Set the winner
            winningCombination = combination// Set the winning combination
            highlightCells(winningCombination) // Highlight the winning combination
            console.log("now")
        }
    });

    if (winner) {
        highlightCells(winningCombination)
        alert(winner + " is the WINNER!")
        console.log("here")
        if (confirm("Do you want to play again?")) {
            resetGame();
        }
    } else if (cells.every(cell => cell.innerText.trim() !== "")) {
        alert("It's a stalemate!")
        if (confirm("Do you want to play again?")) {
            resetGame();
        }
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

function resetGame() {
    cells.forEach(function (cell) {
        cell.innerText = ""
        cell.classList.remove("highlight")
    })
    currentPlayer = "X"
}