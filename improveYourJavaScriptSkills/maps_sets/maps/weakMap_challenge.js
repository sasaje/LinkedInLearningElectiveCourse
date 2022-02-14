const newYork = {city: "New York"};
const nola = {city: "New Orleans"};
const chicago = {city: "Chicago"};
const losAngeles = {city: "Los Angeles"};

//Create a WeakMap using the provided variables as keys.
//Set the value to whatever term you think of when you hear
//those cities. The value can be anything. Hint: use set()

const cities = new WeakMap();
cities.set(newYork, "Big Apple");
cities.set(nola, "Mardi Gras");
cities.set(chicago, "Windy Gras");
cities.set(losAngeles, "Hollywood");

//Get the value associated with the key: nola.
const nolaValue = cities.get(nola);
console.log("What is the value of the value nola", nolaValue);

//Get the value associated with the key: dallas.
const dallas = {city: "Dallas"};
const dallasValue = cities.get(dallas);
console.log("What is the value of the key dallas?", dallasValue);

//Does this WeakMap have the key: newYork?
const hasNewYork = cities.get(newYork);
console.log("What is the value of the key newYork?", hasNewYork);

//Delete the following key from your WeakMap: chicago
console.log("Is the deletion of 'chigaco' successfully?: ", cities.delete(chicago));