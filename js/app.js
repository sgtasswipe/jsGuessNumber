console.log("yessir")
const lblMessage = document.querySelector(".message");
const pbHint = document.querySelector(".hint");
let highScore = document.querySelector(".highscore")
const pbAgain = document.querySelector(".again")
const pbCheck = document.querySelector(".check")
const lblNumber = document.querySelector(".number")
let scoreDisplay = document.querySelector(".score")
let inpGuess = document.querySelector(".guess")
let correctNumber = document.querySelector(".number")
const bdy = document.querySelector("body")
highScore.value = 0
highScore.innerText = 0
let score = 5
correctNumber.value= generateRandomNumber()

scoreDisplay.innerText=score

console.log(correctNumber)
console.log(correctNumber.textContent)

console.log(inpGuess)


console.log(lblNumber)
console.log(score)

console.log(lblMessage.innerText)
/// GAME LOGIC ///
function  gameLogic() {

const guess = inpGuess.value
if (guess ==correctNumber) {
    lblMessage.innerText = "Du har gættet tallet";
    bdy.style.backgroundColor = "green";
    youWin()
} else if (guess> correctNumber) {
    console.log(guess)
    lblMessage.innerText = "too high";
    decreaseScore()
} else if (guess < correctNumber) {
    console.log(guess)
    lblMessage.innerText = "too low";
   decreaseScore()
}
}
function playAgain () {
    bdy.style.backgroundColor = "#222";
    score = 5
    scoreDisplay.innerText =score
    inpGuess.value = ""  // input field is cleared
    lblMessage.innerText = "Start guessing..."
    correctNumber = generateRandomNumber()


}
function generateRandomNumber () {

   return  correctNumber = Math.trunc(Math.random()*20+1)
}
function youWin() {
        // js cant figure out how to get Number from innertext so we have to convert it to a number.
    let currentHighScore = Number(highScore.innerText) || 0;

    if (score > currentHighScore) {

        highScore.innerText = score;
    }

    lblMessage.innerText = "You Win!";
}


function decreaseScore() {
    if (score > 1) {
        score--;
        scoreDisplay.innerText = score;
    } else {
        score--;
        scoreDisplay.innerText = score;
        lblMessage.innerText = "Game Over! No more guesses left.";
        bdy.style.backgroundColor = "red";
    }
}



function checkIfEven() {
    if (correctNumber % 2 == 0) {
        lblMessage.innerText = "The number is even";
    } else {
        lblMessage.innerText = "The number is odd";
    }
}



pbAgain.addEventListener('click', playAgain)
pbCheck.addEventListener('click', gameLogic)
pbHint.addEventListener('click', checkIfEven)
