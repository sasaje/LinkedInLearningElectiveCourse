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

//What is the first entry in our Set?
console.log("The first entry in the set is: ", icecremes.entries().next().value);

