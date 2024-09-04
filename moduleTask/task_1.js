/**
 * 
 * 

Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
 */

const colors = ["red", "blue", "green", "yellow", "orange"];

const colors_reversed = [];

for (let i = colors.length - 1; i >= 0; i--) {
  colors_reversed.push(colors[i]);
}

console.log(colors);
console.log(colors_reversed);
