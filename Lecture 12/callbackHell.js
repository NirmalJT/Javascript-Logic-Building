///CallBack Hell is nested callback stacked below one another forming a pyramid like structure calling a callback funtion inside a callback and go on it also called pyramid of doom
//These style of programming is very difficult to understand and manages thats why we avoid callback hell
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("Data :", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
//This way all the data will be shown at the same time after 2 second but we want to show data after 2 second each  for that we will use callback
// getData(1);
// getData(2);
// getData(3);
//These structure is called callback hell or pyramid of doom it is very difficult to understand and manage
//to solve these problem we have promises
getData(1, () => {
  console.log("Geting data 2...");
  getData(2, () => {
    console.log("Geting data 3...");
    getData(3, () => {
      console.log("Geting data 4...");
      getData(4, () => {
        console.log("Getting data 5...");
        getData(5);
      });
    });
  });
});
