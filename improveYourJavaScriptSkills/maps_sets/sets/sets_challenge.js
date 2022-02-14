//Letters Guessed
//You are playing a game of snowman with a friend and keep track of
//letters that have been guessed using Set().
//Follow the tasks below to test your knowledge.

//1. So far, your friend has gussed the following letters: r, s, t, l, n, e.
//Create a Set using the letters guessed thus far.
const lettersGuesed = new Set();
lettersGuesed.add("r").add("s").add("t").add("l").add("n").add("e");
console.log(lettersGuesed);

//2. Your friend takes another guess: p. Before you add it to the set check
//to see if the Set has 'p'. If not, add it to the Set.
console.log("Does the Set contains the letter 'p'", lettersGuesed.has("p"));
lettersGuesed.add("p");
console.log(lettersGuesed);

//3. At this point, we will assume your friend hasn't tried to guess the same letter twice.
//The size of the Set will indicate how many guesses he's made. How many guesses
//has your friend made?
console.log("Guesses made: ", lettersGuesed.size);

//4. Delete the letter 'l' from your Set.
lettersGuesed.delete("l");

//5. What is the second value in your Set?
const lettersGuesedValues = lettersGuesed.values();
lettersGuesedValues.next();
const secondLettersGuesed = lettersGuesedValues.next().value;
console.log("The second value is: ", secondLettersGuesed);

//6. What is the first entry in your Set?
const firstEntry = lettersGuesed.entries().next().value;
console.log("The first entry is:", firstEntry);

//7. For each entry in your Set, log out whether the guess was a consonant or a vowel.
//This one is a little challenging!
const vowels = ["a", "e", "i", "o", "u"];

lettersGuesed.forEach((value) =>{
    const letterType = vowels.includes(value) ? "vowel" : "constant";
    console.log(`The letter ${value} is a ${letterType}`);
});

//8. Clear your Set!
lettersGuesed.clear();
console.log("Was the Set cleared?", lettersGuesed.size);