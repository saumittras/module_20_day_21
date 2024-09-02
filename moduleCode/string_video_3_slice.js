const address = "andorKilla";
const part = address.slice(2, 5); // slice(start_index, stop_index+1)
console.log(part);

const sentense = " I am a good and hardworking person.";
console.log(sentense.split());

// to split from white space use string.split(" split by the letter or subject");

const friends = "Rahim,kahim,dahim,lahim,fahim,sahim";
console.log(friends);
const array1 = friends.split(",");
console.log(array1);

// join a array

console.log(array1.join()); // default joit the array items by ,

console.log(array1.join("|")); // output Rahim|kahim|dahim|lahim|fahim|sahim
