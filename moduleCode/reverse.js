const sentences = "I am learning web dev";
// const result = '. ved bew '

let reverse = "";

for (const letter of sentences) {
  // console.log(letter);
  reverse = letter + reverse;
  console.log(reverse);
}
console.log(reverse);

// using forloop
let reverse2 = "";
for (let i = sentences.length - 1; i >= 0; i--) {
  reverse2 += sentences[i];
  console.log(reverse2);
}

//Shortcart methode

const revnew = sentences.split("").reverse().join("");
console.log(revnew);
