/* Tutorial 4
   Example 3 JavaScript code
*/

console.log("Navarrete's Output from Tutorial 4 Example 3");

//Generate random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("(Secret number for testing:)", secretNumber);

//Initialize variables
let guess = null;
let attempts = 0;

//Start game
alert("I'm thinking of a number between 1 and 100. Can you guess it?");

//Loop
while (guess != secretNumber) {
  guess = prompt("Enter your guess (1-100):");

  if (guess === null) {
    alert("Game cancelled, Goodbye!");
    break;
  }

  //Convert to number 
  guess = Number.parseInt(guess, 10);

  //Check if the number is valid 
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
    continue; 
  }

  //Increment attempt counter 
  attempts++;

  //Compare guess to secret number 
  if (guess < secretNumber) {
    alert("Too low, guess again!");
  } 
  else if (guess > secretNumber) {
    alert("Too high, guess again!");
  }
  //Correct guess
  else {
    alert(`Correct! It took you ${attempts} attempts to guess the correct number.`);
    console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);

  }
}
