const rockEl = document.getElementById('rock')
const paperEl = document.getElementById('paper')
const scissorsEl = document.getElementById('scissors')
const playerSelectionEl = document.getElementById('your-selection')
const houseSelectionEl = document.getElementById('house-selection')

const rockImg = document.createElement("img") 
const paperImg = document.createElement("img") 
const scissorsImg = document.createElement("img") 
rockImg.src = 'images/icon-rock.svg'
paperImg.src = 'images/icon-paper.svg'
scissorsImg.src = 'images/icon-scissors.svg'

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

function getHouseSelection() {
    const randomIndex = getRandomIndex(houseOptions)
    const houseSelection = houseOptions[randomIndex]
    
    // clone img so player and house each have their own img elements
    const clonedImg = houseSelection.img.cloneNode()

    houseSelectionEl.innerHTML = ''
    houseSelectionEl.append(houseSelection.name, clonedImg)
    console.log("House:", houseSelection.name)
}

rockEl.addEventListener('click', () => {
    console.log('rock clicked')
    playerSelectionEl.innerHTML = ''
    playerSelectionEl.append('Rock', rockImg)
    getHouseSelection()
})

paperEl.addEventListener('click', () => {
    console.log('paper clicked')
    playerSelectionEl.innerHTML = ''
    playerSelectionEl.append('Paper', paperImg)
    getHouseSelection()
})

scissorsEl.addEventListener('click', () => {
    console.log('scissors clicked')
    playerSelectionEl.innerHTML = ''
    playerSelectionEl.append('Scissors', scissorsImg)
    getHouseSelection()
})