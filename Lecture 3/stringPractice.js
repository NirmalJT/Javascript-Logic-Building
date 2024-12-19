//Prompt the user the enter their full name. Generate a username for them based on the input.Start username with @ , followed by their full name and ending with the fullname length.
//eg. username="Nirmal" username should be "@Nirmal6"

let 
userName = prompt("Enter your name Without spaces");
console.log(`Your username is @${userName}${userName.length}`);
