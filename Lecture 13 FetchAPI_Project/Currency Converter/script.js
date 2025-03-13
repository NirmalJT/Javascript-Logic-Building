let baseUrl = "https://api.exchangerate-api.com/v4/latest";
let exchangeBtn = document.querySelector(".btn");
let dropDowns = document.querySelectorAll("form select");
let msg = document.querySelector(".msg");
let fromCurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");

for (let select of dropDowns) {
  for (let countryCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = countryCode;
    newOption.value = countryCode;
    if (select.name === "from" && countryCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && countryCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

updateFlag = (element) => {
  let countrFlag_code = countryList[element.value];

  let img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countrFlag_code}/flat/64.png`;
};

exchangeCurr = async (inputVal) => {
  let updatedUrl = `${baseUrl}/${fromCurr.value}`;
  let response = await fetch(updatedUrl);
  let curr = await response.json();
  let changeAmount = curr.rates[tocurr.value];
  let result = changeAmount * inputVal;
  msg.innerText = `${inputVal}${fromCurr.value}=${result.toFixed(3)}${
    tocurr.value
  }`;
};

exchangeBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let inputVal = parseFloat(document.querySelector("input").value);
  if (inputVal === "" || inputVal < 1) {
    inputVal = 1;
    document.querySelector("input").value = 1;
  }
  exchangeCurr(inputVal);
});
