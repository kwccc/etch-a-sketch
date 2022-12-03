const button = document.createElement('button')
button.textContent = 'Input'
document.body.appendChild(button)

button.addEventListener('click', getInput)

const container = document.createElement('div')
container.classList.add('container')

resetSquares(16)

function getInput() {
    let input = prompt('How many number of squares per side of grid? (Max 100)')
    while (input > 100) {
        input = prompt(`${input} is over 100! \nHow many number of squares per side of grid? (Max 100)`)
    }
    setGridSize(input)
    resetSquares(input)
}

function setGridSize(num) {
    const spacingPercentage = 100 / num
    container.style.gridTemplateColumns = `repeat(${num}, ${spacingPercentage}%)`
    container.style.gridTemplateRows = `repeat(${num}, ${spacingPercentage}%)`
}

function resetSquares(num) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }

    for (let i = 1; i <= num * num; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        container.appendChild(square)
    }

    document.body.appendChild(container)

    const squares = document.querySelectorAll('.square')
    
    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            if (!square.classList.contains('hover')) {
                square.classList.add('hover')
            }
        })
    })
}