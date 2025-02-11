//getAttribute & setAttribute
//getAttribute used to get the  attribute value from an element
//setAttribute used to set the attribute value in an element

let div = document.querySelector("div");
console.log(div.getAttribute("class"));
console.log(div.getAttribute("name"));
let span = document.querySelector("span");
console.log(span.getAttribute("id"));
let para = document.querySelector("p");
para.setAttribute("class", "newPara");
//style attribute
console.log(div.style.backgroundColor="red")
div.style.fontSize="larger"