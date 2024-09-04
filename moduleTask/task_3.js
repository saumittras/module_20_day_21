/**
 * 
 *
 Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
 * 
 */

var numbers = ["Tom", "Tim", "Tin", "Tik"];
const newString = numbers.join(); // converted array to a string by join() methode
let finalString = ""; // decleared a emty string for final output
for (let i = 0; i < newString.length; i++) {
  if (newString[i] === ",") {
    continue;
  } else {
    finalString = finalString + newString[i];
  }
}
console.log(finalString);
