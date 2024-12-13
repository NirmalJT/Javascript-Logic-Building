console.log("Lets Start Writing javascript");

let onBtn = document.getElementById("on");
let offBtn = document.getElementById("off");
onBtn.addEventListener("click", function () {
  document.getElementById("img").src =
    "https://www.w3schools.com/js/pic_bulbon.gif";
});
offBtn.addEventListener("click", function () {
  document.getElementById("img").src =
    "https://www.w3schools.com/js/pic_bulboff.gif";
});
