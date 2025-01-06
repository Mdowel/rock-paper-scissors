const playerBtns = document.querySelectorAll('button')
const playerSelectionEl = document.getElementById('your-selection')
const houseSelectionEl = document.getElementById('house-selection')
const resultEl = document.getElementById('result')

const rockImg = document.createElement("img") 
rockImg.src = 'images/icon-rock.svg'

const paperImg = document.createElement("img") 
paperImg.src = 'images/icon-paper.svg'

const scissorsImg = document.createElement("img") 
scissorsImg.src = 'images/icon-scissors.svg'

let playerSelection = ''

const houseOptions = [
    {
        name: "Rock",
        img: rockImg
    },
    {
        name: "Paper",
        img: paperImg
    },
    {
        name: "Scissors",
        img: scissorsImg
    },

]

function getRandomIndex(array) {
    let randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
}

playerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // console.log(`${btn.id} clicked`)
        playerSelectionEl.innerHTML = ''
        if (btn.id === 'rock') {
            playerSelectionEl.append('Rock', rockImg)
            playerSelection = 'Rock'

        } else if (btn.id === 'paper') {
            playerSelectionEl.append('Paper', paperImg)
            playerSelection = 'Paper'

        } else if (btn.id === 'scissors') {
            playerSelectionEl.append('Scissors', scissorsImg)
            playerSelection = 'Scissors'

        }
        getHouseSelection()
    })
})

function getHouseSelection() {
    const randomIndex = getRandomIndex(houseOptions)
    const houseSelection = houseOptions[randomIndex]

    // clone img so player and house each have their own img elements
    const clonedImg = houseSelection.img.cloneNode()
    clonedImg.classList.add('house-selection-img')
    // add selection to DOM
    houseSelectionEl.innerHTML = ''
    houseSelectionEl.append(houseSelection.name, clonedImg)


    if (playerSelection === houseSelection.name) {
        resultEl.innerText = "Tie!"
    } else if (playerSelection === 'Rock' && houseSelection.name === 'Paper') {
        resultEl.innerText = 'You Lose 😞'
    } else if (playerSelection === 'Rock' && houseSelection.name === 'Scissors'){
        resultEl.innerText = 'You Win! 😀'
    } else if (playerSelection === 'Paper' && houseSelection.name === 'Rock'){
        resultEl.innerText = 'You Win! 😀'
    } else if (playerSelection === 'Paper' && houseSelection.name === 'Scissors'){
        resultEl.innerText = 'You Lose 😞'
    } else if (playerSelection === 'Scissors' && houseSelection.name === 'Rock'){
        resultEl.innerText = 'You Lose 😞'
    } else if (playerSelection === 'Scissors' && houseSelection.name === 'Paper'){
        resultEl.innerText = 'You Win! 😀'
    }
}