const school = "Rajuk Uttra Model School";

// console.log(school);

const subject = "Chemistry";
const book = "chemistry";
// Normal to compare
if (subject === book) {
  console.log("match the book");
} else {
  console.log("does not match");
}

// conver the string to small letter toLowercase() function
// conver the string to capital letter toUppercase() function

if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("match the book");
} else {
  console.log("does not match");
}

const drink = " water";
const liquid = "water";

if (drink === liquid) {
  console.log("match the two items");
} else {
  console.log("does not match the two items");
}

// to remove white space use the trim() functin

if (drink.trim() === liquid.trim()) {
  console.log("2nd match the two items");
} else {
  console.log(" 2nd does not match the two items");
}
