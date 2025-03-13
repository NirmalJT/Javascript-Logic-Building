let URL = "https://dogapi.dog/api/v2/facts";
let factContainer = document.querySelector(".factContainer");
let Button = document.querySelector("#btn");

// Using Async-await we can also do this using promise chain
const getFacts = async () => {
  console.log("Getting dog fact.....");
  let response = await fetch(URL);
  console.log(response); // it will print in json formate (Javascript Object Notation)
  let dataFact = await response.json();
  console.log(dataFact.data[0].attributes.body);
  factContainer.innerText = dataFact.data[0].attributes.body;
};

//Using promise chain
/*

function getFacts() {
  fetch(URL)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.data[0].attributes.body);
      factContainer.innerText = data.data[0].attributes.body;
    });
}
    */

Button.addEventListener("click", getFacts);
