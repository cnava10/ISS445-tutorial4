/* Tutorial 4
   Example 1 JavaScript code
*/
console.log("Navarrete's Output from Tutorial 4 Example 1");

//Ask user to input a number 1-100
let userInput = prompt("Please enter a number between 1 and 100:");

//Blank input
if (userInput === null || userInput.trim() === "") {
  console.log("Sorry, no input was provided.");
}
//convert to number
else {let number = Number.parseInt(userInput, 10);

//check for valid number
if (isNaN(number) || !Number.isInteger(number)) {
  console.log(`Sorry, ${userInput} is not a valid entry.`);
}
//check within valid range 
else if (number < 1 || number > 100) {
  console.log(`Sorry, ${number} is not a valid entry.`);
}
//valid input
else {
  console.log(`Thank you! You entered ${number}, a valid number.`);
}

}




