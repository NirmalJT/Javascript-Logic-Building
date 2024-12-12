// Grade system using switch stetement
console.log("Lets learn about switch statement");

let marks = prompt("Enter you marks:");
let Grade;
marks = Number(marks);
if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Please enter a valid no between 0 to 100:");
} else {
  switch (Math.floor(marks / 10)) {
    case 10:
    case 9:
      Grade = "A";
      break;
    case 8:
    case 7:
      Grade = "B";
      break;
    case 6:
      Grade = "C";
      break;
    case 5:
      Grade = "D";
      break;

    default:
      Grade = "F";
      break;
  }
  console.log(`You got ${marks} and grade  ${Grade}`);
}
