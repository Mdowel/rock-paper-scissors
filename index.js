const playerSelectionEl = document.getElementById('your-selection')
const houseSelectionEl = document.getElementById('house-selection')
const resultEl = document.getElementById('result')
const toggleBtn = document.getElementById('spock-toggle')
const playerBtnsSection = document.getElementById('game-buttons')
// const playerBtns = playerBtnsSection.querySelectorAll('button')
const logo = document.getElementById('logo')
const spockLogo = document.getElementById('spock-logo')

const rockImg = document.createElement("img") 
rockImg.src = 'images/icon-rock.svg'

const paperImg = document.createElement("img") 
paperImg.src = 'images/icon-paper.svg'

const scissorsImg = document.createElement("img") 
scissorsImg.src = 'images/icon-scissors.svg'

const lizardImg = document.createElement("img") 
lizardImg.src = 'images/icon-lizard.svg'

const spockImg = document.createElement("img") 
spockImg.src = 'images/icon-spock.svg'

let playerSelection = ''
let spockMode = false

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
    }
]

function getRandomIndex(array) {
    let randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
}

playerBtnsSection.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('.action-btn')
    if(!clickedBtn) return

    console.log(`${clickedBtn.id} clicked`)
        playerSelectionEl.innerHTML = ''
        if (clickedBtn.id === 'rock') {
            playerSelectionEl.append('Rock', rockImg)
            playerSelection = 'Rock'

        } else if (clickedBtn.id === 'paper') {
            playerSelectionEl.append('Paper', paperImg)
            playerSelection = 'Paper'

        } else if (clickedBtn.id === 'scissors') {
            playerSelectionEl.append('Scissors', scissorsImg)
            playerSelection = 'Scissors'

        } else if (clickedBtn.id === 'lizard') {
            playerSelectionEl.append('Lizard', lizardImg)
            playerSelection = 'Lizard'

        } else if (clickedBtn.id === 'spock') {
            playerSelectionEl.append('Spock', spockImg)
            playerSelection = 'Spock'
        }
        getHouseSelection()
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
    // spock rules
    else if (playerSelection === 'Rock' && houseSelection.name === 'Lizard'){
        resultEl.innerText = 'You Win! 😀'
    }
    else if (playerSelection === 'Rock' && houseSelection.name === 'Spock'){
        resultEl.innerText = 'You Lose 😞'
    }
    else if (playerSelection === 'Paper' && houseSelection.name === 'Lizard'){
        resultEl.innerText = 'You Lose 😞'
    }
    else if (playerSelection === 'Paper' && houseSelection.name === 'Spock'){
        resultEl.innerText = 'You Win! 😀'
    }
    else if (playerSelection === 'Scissors' && houseSelection.name === 'Lizard'){
        resultEl.innerText = 'You Win! 😀'
    }
    else if (playerSelection === 'Scissors' && houseSelection.name === 'Spock'){
        resultEl.innerText = 'You Lose 😞'
    }
    else if (playerSelection === 'Lizard' && houseSelection.name === 'Rock'){
        resultEl.innerText = 'You Lose 😞'
    }
    else if (playerSelection === 'Lizard' && houseSelection.name === 'Paper'){
        resultEl.innerText = 'You Win! 😀'
    }
    else if (playerSelection === 'Lizard' && houseSelection.name === 'Scissors'){
        resultEl.innerText = 'You Lose 😞'
    }
    else if (playerSelection === 'Lizard' && houseSelection.name === 'Spock'){
        resultEl.innerText = 'You Win! 😀'
    }
    else if (playerSelection === 'Spock' && houseSelection.name === 'Rock'){
        resultEl.innerText = 'You Win! 😀'
    }
    else if (playerSelection === 'Spock' && houseSelection.name === 'Paper'){
        resultEl.innerText = 'You Lose 😞'
    }
    else if (playerSelection === 'Spock' && houseSelection.name === 'Scissors'){
        resultEl.innerText = 'You Win! 😀'
    }
    else if (playerSelection === 'Spock' && houseSelection.name === 'Lizard'){
        resultEl.innerText = 'You Lose 😞'
    }
}

// spock mode
toggleBtn.addEventListener('click', () => {
    if(!spockMode){
        // change logo
        logo.classList.add('hidden')
        spockLogo.classList.remove('hidden')

        // add btns to DOM
        playerBtnsSection.innerHTML += `
        <button id="lizard" class="action-btn">
            <img id="lizard-img" src="images/icon-lizard.svg" alt="lizard">
        </button>
        <button id="spock" class="action-btn">
            <img id="spock-img" src="images/icon-spock.svg" alt="spock">
        </button>  
        `
        // add to houseOptions array
        houseOptions.push(
            {
                name: "Lizard",
                img: lizardImg
            },
            
            {
                name: "Spock",
                img: spockImg
            },
        )
        spockMode = true
        
    } else {
        // change logo
        spockLogo.classList.add('hidden')
        logo.classList.remove('hidden')

        // remove btns from DOM
        document.getElementById('lizard').remove()
        document.getElementById('spock').remove()

        // remove objects from houseOptions array
        houseOptions.pop()
        houseOptions.pop()

        spockMode = false
    }
})