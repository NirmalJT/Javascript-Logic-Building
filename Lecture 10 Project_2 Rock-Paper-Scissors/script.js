let userCount = 0;
let compCount = 0;
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let choices = document.querySelectorAll(".choice");
//handle draw function
const handleDraw = () => {
  msg.innerText = "Game was Draw play again!";
  msg.style.backgroundColor = "rgb(16, 16, 53)";
};
//Computer Choice
const genComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You win , ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    msg.innerText = `You lose , ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const countScore = (userWin) => {
  if (userWin) {
    userCount++;
    userScore.innerText = `${userCount}`;
  } else {
    compCount++;
    compScore.innerText = `${compCount}`;
  }
};
const playGame = (userChoice) => {
  let compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    handleDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === " paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
    countScore(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
