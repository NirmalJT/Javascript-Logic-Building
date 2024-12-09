console.log("lets write javascript");

let btn = document.getElementById("btn").addEventListener("click", function () {
  let firstNum = parseInt(document.getElementById("firstNum").value);
  let secondNum = parseInt(document.getElementById("secondNum").value);
  let thirdNum = parseInt(document.getElementById("thirdNum").value);
  if (
    isNaN(firstNum) ||
    isNaN(secondNum) ||
    isNaN(thirdNum) ||
    firstNum <= 0 ||
    secondNum <= 0 ||
    thirdNum <= 0
  ) {
    alert("Enter a valid number:");
  } else {
    let largerst = Math.max(firstNum, secondNum, thirdNum);
    document.getElementById("result2").textContent = largerst;
  }
});
