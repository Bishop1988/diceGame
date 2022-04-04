let roll = document.querySelector(".roll")
let playAgain = document.querySelector(".play-again")
let score = document.querySelector(".score")
let showDice = document.querySelector(".show-dice")
let topLeft = document.querySelector(".topLeft")
let topCenter = document.querySelector(".topCenter")
let topRight = document.querySelector(".topRight")
let middleLeft = document.querySelector(".middleLeft")
let middleCenter = document.querySelector(".middleCenter")
let middleRight = document.querySelector(".middleRight")
let bottomLeft = document.querySelector(".bottomLeft")
let bottomCenter = document.querySelector(".bottomCenter")
let bottomRight = document.querySelector(".bottomRight")
let newGame = document.querySelector(".new-game")
let accumulator = []

playAgain.addEventListener("click", () => {
    score.innerHTML = "0"
    roll.style.display = "inline-block"
    playAgain.style.display = "none"
    accumulator = []
    sum = 0
})

newGame.addEventListener("click", () => {
    score.innerHTML = "0"
    accumulator = []
    sum = 0
})

roll.addEventListener("click", () => {
    showDice.style.opacity = "1"
    let diceRoll = Math.floor(Math.random() * (7 - 1) + 1)
    
    if (diceRoll == 1) {
        topLeft.style.display = "none"
        topCenter.style.display = "none"
        topRight.style.display = "none"
        middleLeft.style.display = "none"
        middleCenter.style.display = "block"
        middleRight.style.display = "none"
        bottomLeft.style.display = "none"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "none"
    } else if (diceRoll == 2) {
        topLeft.style.display = "none"
        topCenter.style.display = "none"
        topRight.style.display = "block"
        middleLeft.style.display = "none"
        middleCenter.style.display = "none"
        middleRight.style.display = "none"
        bottomLeft.style.display = "block"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "none"
    } else if (diceRoll == 3) {
        topLeft.style.display = "none"
        topCenter.style.display = "none"
        topRight.style.display = "block"
        middleLeft.style.display = "none"
        middleCenter.style.display = "block"
        middleRight.style.display = "none"
        bottomLeft.style.display = "block"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "none"
    } else if (diceRoll == 4) {
        topLeft.style.display = "block"
        topCenter.style.display = "none"
        topRight.style.display = "block"
        middleLeft.style.display = "none"
        middleCenter.style.display = "none"
        middleRight.style.display = "none"
        bottomLeft.style.display = "block"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "block"
    } else if (diceRoll == 5) {
        topLeft.style.display = "block"
        topCenter.style.display = "none"
        topRight.style.display = "block"
        middleLeft.style.display = "none"
        middleCenter.style.display = "block"
        middleRight.style.display = "none"
        bottomLeft.style.display = "block"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "block"
    } else if (diceRoll == 6) {
        topLeft.style.display = "block"
        topCenter.style.display = "none"
        topRight.style.display = "block"
        middleLeft.style.display = "block"
        middleCenter.style.display = "none"
        middleRight.style.display = "block"
        bottomLeft.style.display = "block"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "block"
    }
    
    accumulator.push(diceRoll)
    let sum = 0
    for (let i = 0; i < accumulator.length; i++) {
        sum += accumulator[i]
        console.log(accumulator)
        if (accumulator[i] == 1) {
            sum = 0
            accumulator = []
        }
    }

    if (sum == 0) {
        score.innerHTML = "You Lost!"
        accumulator = []
        roll.style.display = "none"
        playAgain.style.display = "inline-block"
    } else if (sum >= 20) {
        score.innerHTML = "You Won!"
        roll.style.display = "none"
        playAgain.style.display = "inline-block"
        accumulator = []
        sum = 0
    } else {
        score.innerHTML = sum
    }
      
})