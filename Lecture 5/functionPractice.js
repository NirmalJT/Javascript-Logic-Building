//Qs. Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string

function countVowel(String) {
  let count = 0;
  for (let letter of String) {
    if (
      letter === "a" ||
      letter === "A" ||
      letter === "e" ||
      letter === "E" ||
      letter === "i" ||
      letter === "I" ||
      letter === "o" ||
      letter === "O" ||
      letter === "u" ||
      letter === "U"
    ) {
      count++;
    }
  }
  console.log(count);
}
String = "ToOny";
countVowel(String);

//solving the problem using arrow function
//Create an arrow function to perform the same task
let findVowel = (string) => {
  let vowel = 0;
  for (let char of string) {
    if (
      char === "a" ||
      char === "A" ||
      char === "e" ||
      char === "E" ||
      char === "i" ||
      char === "I" ||
      char === "o" ||
      char === "O" ||
      char === "u" ||
      char === "U"
    ) {
      vowel++;
    }
  }
  console.log(`The number of vowels in the given string is ${vowel}`);
};

string = "HEllO i am ";
findVowel(string);
