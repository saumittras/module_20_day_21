/**
 * 
 * 
Task 4 (Hard):
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output: 'person working hard a am I'
 * 
 */
const statement = "I am a hard working person";
const wordArray = statement.split(" ");

//[ 'I', 'am', 'a', 'hard', 'working', 'person' ]
let reversedStatement = "";

for (let i = wordArray.length - 1; i >= 0; i--) {
  reversedStatement = reversedStatement + wordArray[i] + " ";
}
console.log(reversedStatement);
