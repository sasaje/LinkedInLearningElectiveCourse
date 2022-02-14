//Maps: Challenge

//Below is a list of Oscar-winning Best Pictures from the last several years.
// 2020 - "Parasite"
// 2019 - "Green Book"
// 2018 - "The Shape of Water"
// 2017 - "Moonlight"
// 2016 - "Spotlight"
// 2015 - "Birdman"
// 2014 - "12 Years a Slave"
// 2013 - "Argo"

//1. Create a new Map with the Best Pictures list from above.
//Make sure your keys are the year, BUT they can be any format.

const bestPictures = new Map();
bestPictures.set(2013, "Argo");
bestPictures.set(2014, "12 Years a Slave");
bestPictures.set(2015, "Birdman");
bestPictures.set(2016, "Spotlight");
bestPictures.set(2017, "Moonlight");
bestPictures.set(2018, "The Shape of Water");
bestPictures.set(2019, "Green Book");
bestPictures.set(2020, "Parasite");

console.log(bestPictures);
console.log("The size of the map is: ", bestPictures.size);

//2. What film won best picture in 2015?
console.log(bestPictures.get(2015));

//3. Does this list contain Best Picture from 2010? 2018?
const has2010 = bestPictures.has(2010);
console.log("Does the map has 2010?: ", has2010);

const has2018 = bestPictures.has(2018);
console.log("Does the map has 2018?: ", has2018);

//4. How many films are included in this list?
console.log("The size of the map is: ", bestPictures.size);

//5. What is the second key in this movies Map?
const bestPicturesValues = bestPictures.values();
bestPicturesValues.next();
const secondKey = bestPicturesValues.next().value;
console.log("The second key in the map is: ", secondKey);

//6. What is the third value in this movies Map?
const thirdKey = bestPicturesValues.next().value;
console.log("The third key in the map is: ", thirdKey);

//7. What is the first set of entries in this movies Map?
const bestPicturesEntries = bestPictures.entries();
const firstEntry = bestPicturesEntries.next().value;
console.log("The first entry is: ", firstEntry);

//8. Loop over the map, and if the movie won Best Picture before 2017,
//log it in the console. Include the year and the movie.
bestPictures.forEach((value, key) => {
    if(key < 2017){
        console.log(`The picture is: ${value} in ${key}`);
    }
});

//9. Delete the Best Picture from 2013 from your movies Map.
console.log("Has the picture from 2013 been deleted?", bestPictures.delete(2013));
console.log(bestPictures.size);

//10. Clear your movies Map.
bestPictures.clear();
console.log("Maps size", bestPictures.size);