const person = {
  name: "Sodor Uddin",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav place": ["sundarban", "kuyakata", "rangamati"],
};

//dot notation
//

console.log(person.age);
const income = person.salary;
console.log(income);

// baracket notation
// third bracket diye access kora

console.log(person["married"]);
const boyos = person["age"];
console.log(boyos);
