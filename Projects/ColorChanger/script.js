// let black = document.getElementById("black");
// let blue = document.getElementById("blue");
// let green = document.getElementById("green");
// let red = document.getElementById("red");
// let body = document.querySelector("body");
// console.log(body);

// black.addEventListener("click", () => {
//   body.style.backgroundColor = "rgb(42, 40, 40)";
// });
// blue.addEventListener("click", () => {
//   body.style.backgroundColor = "rgb(63, 63, 244)";
// });
// green.addEventListener("click", () => {
//   body.style.backgroundColor = "rgb(76, 234, 76)";
// });
// red.addEventListener("click", () => {
//   body.style.backgroundColor = "rgb(218, 78, 78)";
// });

let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
