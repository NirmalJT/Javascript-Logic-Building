//My way
/*let submit = document.querySelector("#submit");
let result = document.querySelector(".result");
submit.addEventListener("click", () => {
  let height = parseFloat(document.querySelector("#height").value);
  let weight = parseFloat(document.querySelector("#weight").value);
  let BMI = ((weight * 10000) / (height * height)).toFixed();
  result.innerText=BMI
});*/
//other way to solve

let form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector(".result");
  let guide = document.querySelector(".weightGuide");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Plese enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Plese enter a valid weight";
  } else {
    let BMI = ((weight * 10000) / (height * height)).toFixed(2);
    result.innerHTML = `<span>${BMI}</span>`;
    if (BMI < 18.6) {
      guide.innerHTML = `<span>You are underweight</span>`;
    } else if (BMI > 18.6 && BMI < 24.9) {
      guide.innerHTML = `<span>Your weight is normal</span>`;
    } else {
      guide.innerHTML = `<span>You are Overweight</span>`;
    }
  }
});
