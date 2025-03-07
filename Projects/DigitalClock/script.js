let clockBox = document.getElementById("clockBox");
//
//we can this also like this
// setInterval(() => {
//   const date = new Date();
//   clockBox.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
// }, 1000);
//this method is easiar
setInterval(() => {
  const date = new Date();
  clockBox.innerText = date.toLocaleTimeString();
}, 1000);
