let submitBtn = document.querySelector("form button");
let prvGuessMsg = document.querySelector(".prevGuess");
let remainGuesMsg = document.querySelector(".guessRemain");
let result = document.querySelector(".msg");
let previousGuess_array = [];
let remainingGuess = 10;

function randomNumFn() {
  let randomNum = Math.trunc(Math.random() * 10);
  return randomNum;
}

function compare(inputVal, randomNum) {
  if (inputVal === randomNum) {
    result.innerText = "Result : Win";
  } else {
    result.innerText = "Result : Lose";
  }
  remainingGuess--;
  remainGuesMsg.innerText = `Guesses Remain : ${remainingGuess}`;
  if (remainingGuess === 1) {
    remainingGuess = 11;
    while (previousGuess_array.length > 0) {
      previousGuess_array.pop();
    }
  }
}

submitBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let inputVal = parseFloat(document.querySelector("form input").value);
  if (inputVal === "" || isNaN(inputVal)) {
    alert("Enter a valid number");
  } else {
    previousGuess_array.push(inputVal);
    prvGuessMsg.innerText = `Previous Guesses : ${previousGuess_array}`;

    let randomNum = randomNumFn();
    compare(inputVal, randomNum);
    console.log(randomNum);
  }
});
