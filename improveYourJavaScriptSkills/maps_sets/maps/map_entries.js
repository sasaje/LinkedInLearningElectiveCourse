//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Watch a movie

const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

console.log(saturday);

//How do we get the value associated with the 12 key?
const noon = saturday.get(12);
console.log("What I'm doing on Saturday at 12", noon);

//How do we get the value associated with the 9 key?
const nine = saturday.get(9);
console.log("What I'm doing at 9 on Saturday", nine);

//Does our Map have a value associated with 4?
const hasFour = saturday.has(4);
console.log("Does our map has 4?", hasFour);

//Does our Map have a value associated with 8?
const hasEight = saturday.has(8);
console.log("Does our map has 8?", hasEight);

//What is the size of the map?
const saturdaySize = saturday.size;
console.log(`My map contains: ${saturdaySize} elements`);

//Delete the element associated with the key 3.
console.log("Did my key value pair succesfully delete - 3?", saturday.delete(3));

//Delete the element essociated with the key 10.
console.log("Did my key value pair succesfully delete - 10?", saturday.delete(10));

//Clear the entire saturday Map object.
saturday.clear();
console.log("Maps size", saturday.size);