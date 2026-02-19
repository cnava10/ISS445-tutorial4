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
alert("I'm thinking of a number between 1 and 100. Can you guess?");