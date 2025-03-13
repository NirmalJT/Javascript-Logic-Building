//The Fetch API(Application Programming Interface) provides an interface for fetching(sending/reciving) resouces
//It uses Response and Reject objects

//The fetch() method is used to fetch a resource(data)

let URL = "https://dogapi.dog/api/v2/breeds";
let breedContainer = document.querySelector(".breedContainer");
let Button = document.querySelector("#btn");
const getDog_Breed = async () => {
  console.log("Getting breed and details....");
  let response = await fetch(URL);
  console.log(response);
  let dataBreeds = await response.json();
  let randomNum = Math.trunc(Math.random() * 10);
  console.log(randomNum);
  console.log(dataBreeds.data[randomNum].attributes.description);
  breedContainer.innerText = dataBreeds.data[randomNum].attributes.description;
};

Button.addEventListener("click", getDog_Breed);
//AJAX  is Asynchronouse JS & XML it is old technology where we get the data in XML formate

///Now we get data in json formate which is called Java Object Notation
//json():Return a second promise that resolve with the result of parsing the response body text as json (input JSON , output  is JS object)