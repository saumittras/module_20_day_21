const pen = { brand: "econo", price: 10, color: "black" };
const pencil = new Object();

console.log(pencil);
const rubber = Object.create({});
console.log(rubber);
var person = {};
person.name = "John";
person.age = 30;
console.log(person);
let str = "Mississippi";
console.log(str.indexOf("i", 3));
const strr = "Hello";
strr[0] = "h";
console.log(strr);
const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

for (let prop in myObject) {
  console.log(myObject[prop]);
}
const x = "";
if (!x.length) {
  console.log("Hey");
} else {
  console.log("Hi");
}
