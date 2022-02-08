//JavaScript Objects
const person = {
    name: "Jimmy Smith",
    age: 40,
    hairColor: "brown",
    eyeColor: "blue"
};

const careerData = {
    title: "developer",
    company: "ABC Software",
};

//Spread operator combines the two objects like following
//OBS the last loaded object overrides the previous by same name eg. if both the objects have the same value name
const personWithCareerData ={
    ...person,
    // name: person.name,
    ...careerData,
}

// console.log(personWithCareerData);

//Usefull for updating values in objects
const updates = {
    name : "James Smith",
}

const updatedPerson = {
    ...person,
    ...updates,
}
console.log(updatedPerson);

//Add new numbers to existing array using the spread operator///
const numbers = [1,2,3,4,5];
const newNumbers = [
    0,
    ...numbers,
    6,
]
console.log(newNumbers);

//run npx babel-node TheSpreadOperator