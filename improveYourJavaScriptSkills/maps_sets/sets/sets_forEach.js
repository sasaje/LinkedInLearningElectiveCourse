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

//Loop through our Set and if the value does NOT equal "vanilla",
//log it in the console.

icecremes.forEach((value) =>{
    if(value !== "vanilla"){
        console.log("flavor:", value);
    }
});