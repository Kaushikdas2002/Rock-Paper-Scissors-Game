let yourScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const yourScoreBoard = document.querySelector("#your-score");
const computerScoreBoard = document.querySelector("#computer-score");

const generateComputerChoice = () => {
    const option = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return option[randomNumber];
};

const drawGame = () => {
    msg.innerText = "Draw Game! Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (youWin,yourChoice,computerChoice) => {
    if (youWin) {
        yourScore++;
        yourScoreBoard.innerText = yourScore;
        msg.innerText = `You win! ${yourChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        
    } else {
        computerScore++;
        computerScoreBoard.innerText = computerScore;
        console.log("Computer wins! Your score: ", yourScore, " Computer score: ", computerScore);
        msg.innerText = `You Lost! ${computerChoice} beats ${yourChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (yourChoice) => {

    const computerChoice = generateComputerChoice();

    if (yourChoice === computerChoice) {
        drawGame();
    }
    else{
        let youWin = true;
        if(yourChoice === "rock"){
            youWin = computerChoice === "scissors"? true : false;
        }
        else if(yourChoice === "paper"){
            youWin = computerChoice === "rock"? true : false;
        }
        else if(yourChoice === "scissors"){
            youWin = computerChoice === "paper"? true : false;
        }

        showWinner(youWin,yourChoice,computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const yourChoice = choice.getAttribute("id");
        playGame(yourChoice);
    });
});