/* Tutorial 4
   Example 2 JavaScript code
*/

console.log("Navarrete's Output from Tutorial 4 Example 2");

//Define the function
function analyzeArray(arr) {
//Create an object with three required properties
let resultObject = {
  firstElement: arr[0],
  lastElement: arr[arr.length - 1],
  length: arr.length
};
return resultObject;

}

//Test the function
let example1 = [4, 8, 12, 5, 20];
let example2 = ["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}];

//Call the function and store
let result1 = analyzeArray(example1);
let result2 = analyzeArray(example2);

//Display results
console.log("Example 1 result:", result1);
console.log("Example 2 result:", result2);