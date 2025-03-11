//synchronous means the code runs in a particular sequence of instruction given in the program .Each instruction waits for the previous instruction to complete its execution
//Due to synchronous programming something important instruction get blocked due to some previous instructions which causes a delay in the ui immediately and doesn't block the flow

console.log("one");
console.log("two");
setTimeout(() => {
  console.log("hello");
}, 3000);
console.log("three");
console.log("four");

function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumFnCallback) {
  sumFnCallback(a, b);
}
//a callback is a funtion passed as an  argument to and another funtion
calculator(1, 3, sum);
calculator(2, 2, (a, b) => {
  console.log(a + b);
});

const hello = () => {
  console.log("I am nirmal");
};
setTimeout(hello, 3000);


