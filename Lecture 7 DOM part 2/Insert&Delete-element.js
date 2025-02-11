//Insert Elements: for inserting element we need to first create the element than we can insert it
//we can create new element using document.createElement("el")

let newBtn_insideEnd = document.createElement("button");
let newBtn_insideStart = document.createElement("button");
let newBtn_outsideBefore = document.createElement("button");
let newBtn_outsideAfter = document.createElement("button");
newBtn_insideEnd.innerText = "Click me end";
newBtn_insideStart.innerText = "Click me start";
newBtn_outsideBefore.innerText = "Click me before";
newBtn_outsideAfter.innerText = "Click me after";

let div = document.querySelector("div");
//node.append(el): adds at the end of node(inside)
div.append(newBtn_insideEnd);
//node.prepend(el): adds at the start of the node(inside)
div.prepend(newBtn_insideStart);
//node.before(el): adds before the node (outside)
div.before(newBtn_outsideBefore);
//node.after(el): adds after the node (outside)
div.after(newBtn_outsideAfter);

//newHeading using js insertElement
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hello i am new Heading!</i>";
document.body.prepend(newHeading);
//node.remove: it is used to remove or delete the node   
newHeading.remove()