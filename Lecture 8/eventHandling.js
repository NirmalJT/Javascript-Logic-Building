let btn1 = document.getElementById("btn1");
console.log(btn1);
// if we write inline event handling and also we write event handling fucntion in the external javascript file the the priority will be the external one the inline event will not be executed
btn1.onclick = () => {
  alert("you clicked javascript from the external script not from the inline ");
};

let div = document.querySelector("#box1");
div.onmouseover = () => {
  alert("hey i am div");
};
div.onmouseover = () => {
  alert("hey i am div again"); //if we write two same function of event it will override the frirst one
};
//
//
//Event object
//It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.
let btn2 = document.getElementById("btn2");
btn2.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};
let box2 = document.querySelector("#box2");
box2.onmouseover = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};
//
//
//
/// Event Listeners
// by this way we can do multiple eventlistener calling the same funciton again and again we prefer this one more
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", (evt) => {
  console.log("i am handler1");
});
btn3.addEventListener("click", (evt) => {
  console.log("i am handler2");
});
let handler3 = (evt) => {
  console.log("i am handler3");
};
btn3.addEventListener("click", handler3);
btn3.addEventListener("click", (evt) => {
  console.log("i am handler4");
});
//the callback reference should be same to remove the event listener
btn3.removeEventListener("click", handler3);
