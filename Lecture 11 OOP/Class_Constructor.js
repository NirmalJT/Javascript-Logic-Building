//class is a programe-code template used for creatig objects
//those objects will have some state(variables) & some behaviour(function ) inside it
//we can say it is blueprint or template for createing a object where we need to create object in bulk order where most of the methods are same

class car {
  constructor(brand, milage) {
    console.log("Creating new object");
    this.brandName = brand;
    this.carMilage = milage;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  // setBrand(brand) {
  //   this.brandName = brand;
  // }
}
// constructor() is a method it used to initialize object
// it is automatically invoked by new keyword
let fortuner = new car();
// fortuner.setBrand("toyota");
let bmw = new car("bmw", 12);
let lexas = new car("lexas", 13);
