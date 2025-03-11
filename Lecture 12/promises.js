//promises is for "eventual" completion of task it is an object in js.
//it is a solution of callback hell
let promise = new Promise((resolve, reject) => {
  //   //promise has three state fullfill ,pending, reject
  //   //resolve and reject are two handlers of promise it a funtion that created by js it itself a callback
  console.log("I am a promise in javascript");
  resolve("succsess");
  //   //resolve & reject are callback provided by js
  //   // reject("some error")
});

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("succsess");
      console.log("Data :", dataId);
      //   reject("error");
      if (getNextData) {
        getNextData();
      }
    }, 6000);
  });
}
let result = getData(122);
// A javascript promise object can  be
// 1) pendint: The result is undefined
//2)resolved: The  result is a value (fulfilled)
// 3)reject : The result is  an error object
// promise has state(pending,fulfilled)& some result (result for resolve and error for reject)

function getPromise() {
  return new Promise((resolve, reject) => {
    console.log("I am promise in js again");
    resolve("promise succsess");
    // reject("promise rejected")
  });
}

let get_promise = getPromise();
get_promise.then((res) => {
  console.log("Promise fulfilled", res);
});
get_promise.catch((err) => {
  console.log("Promise rejected", err);
});
//promise chaining

function asyncFunct1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("succsess");
    }, 3000);
  });
}
function asyncFunct2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("succsess");
    }, 3000);
  });
}
// let p1 = asyncFunct1();
// console.log("Fetching data1..........");
// p1.then((res) => {
//   console.log(res);
//   let p2 = asyncFunct2();
//   console.log("Fetching data2..........");
//   p2.then((res) => {
//     console.log(res);
//   });
// });
console.log("Fetching data1..........");
asyncFunct1().then((res) => {
  console.log(res);
  console.log("Fetching data2..........");
  asyncFunct2().then((res) => {
    console.log(res);
  });
});

// let p2 = asyncFunct2();
// console.log("Fetching data2..........");
// p2.then((res) => {
//   console.log(res);
// });

// pyramid of doom
/*

getData(1, () => {
  console.log("Getting data 2......");
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

*/
//using promise
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//     getData(3).then((res) => {
//       console.log(res);
//     });
//   });
// });

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

//it is a solution for callback hell and for better understanding but it also not a better way or a way where we can understand easily it  also complex but easier then callback  now for more easy to understand we have async-await
// Async-Await>>promise chains>>callback hell
