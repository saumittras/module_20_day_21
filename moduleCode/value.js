const person = {
  name: "Sodor Uddin",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav place": ["sundarban", "kuyakata", "rangamati"],
};

console.log(person);
person.salary = 30000;
person["age"] = 26;

const keyName = "name";
console.log(person[keyName]);

console.log(person);
