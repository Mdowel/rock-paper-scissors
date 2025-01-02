const rockEl = document.getElementById('rock')
const paperEl = document.getElementById('paper')
const scissorsEl = document.getElementById('scissors')
const playerSelectionEl = document.getElementById('your-selection')

const rockImg = document.createElement("img") 
const paperImg = document.createElement("img") 
const scissorsImg = document.createElement("img") 
rockImg.src = 'images/icon-rock.svg'
paperImg.src = 'images/icon-paper.svg'
scissorsImg.src = 'images/icon-scissors.svg'


rockEl.addEventListener('click', () => {
    console.log('rock clicked')
    playerSelectionEl.innerHTML = ''
    playerSelectionEl.append('Rock', rockImg)
})

paperEl.addEventListener('click', () => {
    console.log('paper clicked')
    playerSelectionEl.innerHTML = ''
    playerSelectionEl.append('Paper', paperImg)
})

scissorsEl.addEventListener('click', () => {
    console.log('scissors clicked')
    playerSelectionEl.innerHTML = ''
    playerSelectionEl.append('Scissors', scissorsImg)
})