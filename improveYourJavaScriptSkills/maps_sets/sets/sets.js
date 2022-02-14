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

// Does the Set contains the following flavors;
// Mint Chocolate Chip?
// Coffee?

console.log("Does Mint Chocolate Chip exists?", icecremes.has("Mint Chocolate Chip"));
console.log("Does coffee?", icecremes.has("coffee"));

//Get the size
console.log(`The size of the Set is ${icecremes.size}`);

//Delete the vanilla from the Set
icecremes.delete("vanilla");
console.log("Does vanilla still exist?", icecremes);

//Clear the Set
icecremes.clear();
console.log("Did our set clear?", icecremes.size);
