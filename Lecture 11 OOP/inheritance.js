//inheritance is passing down the property and methods from parent classs to child class

class parent {
  hello() {
    console.log("hello i am parent");
  }
}

class child extends parent {}
let object = new child();

class person {
  constructor(name) {
    this.species = "homo sepiens";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("Do nothing");
  }
}
let person1 = new person();
class engineer extends person {
  constructor(name) {
    //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    super(name);
    this.brance = "Computer Science";
  }
  work() {
    //we can also use super keyword to invoked some method of parent class
    super.eat();
    console.log("Developing new things");
  }
}
//if child and parent have same method child method will be used. and it is callled method overriding
let Nirmal = new engineer("Nirmal");
