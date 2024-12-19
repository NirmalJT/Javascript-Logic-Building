//print all even numbes from 0 to 100

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("num is", i);
  }
}
// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

// let num = Math.trunc((Math.random() * 100));
let gameNumber = "25";

let userNumber = prompt("Enter your number");
while (userNumber !== gameNumber) {
  userNumber = prompt("You entered the wrong number Guess again");
}
alert("Congratulation you entered the right number");

