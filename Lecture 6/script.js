//The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
// & is automatically created by browser.

// It is a global object with lots of properties & methods.

//alert and console.log are the part of window object
console.log("hello");
console.log(window);
window.console.log("hello2");
// window.alert("hello");
///
///Document object model
console.log(window.document);
console.dir(window.document); //for printing object we prefer/use console.dir

//DOM manipulation
document.getElementById("peragraph").innerText =
  "I am change by javascript using getElementByID";
//getElementsByClassName returns a html collection it is like a array
let innerData = document.getElementsByClassName("peragraph_class");
for (let i = 0; i < innerData.length; i++) {
  innerData[i].innerText =
    "i am change by javascript using getElementsByClassName";
}
//getElementsByTagName also returns a html collection

let tagName = document.getElementsByTagName("p");
console.log(tagName);
//this is a better way it will take every thing tagname class and also id and also return a nodelist collection
let elements = document.querySelector("#peragraph");
console.log(elements);
let allElements = document.querySelectorAll(".peragraph_class");
console.log(allElements);
//properties
let tagname = document.getElementById("peragraph").tagName;
console.log(tagname);
console.log(document.getElementById("peragraph").innerText);
console.log(document.getElementById("peragraph").textContent);
console.log(document.getElementById("hello").innerHTML);
