//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Watch a movie

const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

console.log(saturday);

//What is the first key in your saturday map object?
const saturdayKeys = saturday.keys();
const firstKey = saturdayKeys.next().value;
console.log("The first key in the map is:", firstKey);

//What is the second value in your saturday Map object?
const saturdayValues = saturday.values();
saturdayValues.next();
const secondValue = saturdayValues.next().value;
console.log("The second value in the map is:", secondValue);

//What is the third set of entries in your saturday Map object?
const saturdayEntries = saturday.entries();
saturdayEntries.next(); // number 1
saturdayEntries.next(); // number 2

const thirdEntrie = saturdayEntries.next().value; //number 3
console.log("What is the third entry in the map", thirdEntrie);


//Using the forEach method, if a key is equal to 12,
//console log the value of the key

saturday.forEach((value, key) => {
    if(key === 12){
        console.log(`It is time for ${value}`);
    }
});
