// A javaScript object is an entity having state and behavior (properties and method).

const employees_tax = {
  //we can prefer this way of writing
  calcTax() {
    console.log("Tax rate is 10%");
  },
  //we can also write like this we will get the same output as the previous syntax did
  calcTax2: function () {
    console.log("Tax rate is 20%");
  },
};

const nirmalJ_T = {
  salary: "30000",
};
const nabajit_R = {
  salary: "40000",
};
const humen_D = {
  salary: "50000",
  calcTax() {
    console.log("Tax rate is 40%");
  },
};
// JS objects have a special property called prototype which is also an object mean object inside an object
//we can set prototype using __proto__
nabajit_R.__proto__ = employees_tax;
//If object and prototype have same method objects method will be used
humen_D.__proto__ = employees_tax;

const student = {
  fullName: "Nirmal Jyoti Thakuria",
  age: 21,
  marks: 88,
  printMarks: function () {
    console.log("marks=", this.marks);
  },
};
