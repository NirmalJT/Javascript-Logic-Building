// async function always returns a promise.

// await pauses the execution of its surrounding async function until the promise is settled.

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200);
    }, 2000);
  });
}
async function getWeather() {
  console.log("Getting weather1...");
  await api();
  console.log("Getting weather2....");
  await api();
}

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("succsess");
    }, 3000);
  });
}
async function getAllData() {
  console.log("geting data1....");
  await getData(1);
  console.log("geting data2....");
  await getData(2);
  console.log("geting data3....");
  await getData(3);
  console.log("geting data4....");
  await getData(4);
  console.log("geting data5....");
  await getData(5);
}

//Async-Await is the best way as compared to promise chain and callback hell it is easy to read or understand

//IIFE is a function that is called immediately as soon as it is defined.
(async function () {
  console.log("geting data1....");
  await getData(1);
  console.log("geting data2....");
  await getData(2);
  console.log("geting data3....");
  await getData(3);
  console.log("geting data4....");
  await getData(4);
  console.log("geting data5....");
  await getData(5);
})();
//IIFE will just execute once without calling it
