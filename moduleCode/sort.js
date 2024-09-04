const persons = ["rakib", "nakib", "sakib", "akib", "dakib", "anis", "Anis"];
const soetedPersons = persons.sort();
console.log(soetedPersons);

const numbers = [4, 7, 12, 8, 43, 6, 1]; // sorting system ascen
console.log(numbers);
// const aceSorted = numbers.sort(); // Sorted Acending  sorted not working properly
const aceSorted = [...numbers].sort(funcrion (a,b) { return a -b}) // Sorted Acending  sorted
const daceSorted =[... numbers].sort(funcrion(a,b) { return b -a}) // Sorted Acending  sorted

console.log(aceSorted);
/**
 *
 * descending --> larger to smaller
 */
