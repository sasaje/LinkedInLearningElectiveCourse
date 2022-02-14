//Ice Cream Flavor Suggestions
//chocolate
//vanilla
//coffee
//coffee
//strawberry
//vanilla

//Using the list of ice cream flavors above create a new Set.

const icecremes = new Set();
icecremes.add("chocolate").add("vanilla").add("coffee").add("coffee").add("strawberry").add("vanilla");
console.log(icecremes);

//What is the second value in the Set?
const icecremesValues = icecremes.values();
icecremesValues.next();

const secondValue = icecremesValues.next().value;
console.log("The second value is: ", secondValue);