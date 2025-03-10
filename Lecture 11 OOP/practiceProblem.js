// You are creating a website for your college. Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) that allows user to view website data.
let data = "college data";
class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Data:", data);
  }
}

// Create a new class called Admin which inherits from User. Add a new method called
// editData to Admin that allows it to edit website data.
class Admin extends user {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    console.log((data = "your edited data"));
  }
}

let user1 = new user("Nabajit", "nabajit@gmail.com");
let Admin1 = new Admin("Nirmal", "nirmal@gmail.com");
