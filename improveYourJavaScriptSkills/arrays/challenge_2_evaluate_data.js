//Includes, Some, and Every
const bowlingScores = [154, 204, 300, 184, 286];

//Challenge Question #1
//Does the array of bowling scores include a 300?
const includeBowlingScore = bowlingScores.includes(300);
console.log("Includes 300: ", includeBowlingScore);

//Challenge Question #2
//Are some of the scores under 150?
const someBowlingScore = bowlingScores.some((score) => score < 150);
console.log("Are some of the scores under 150?: " , someBowlingScore);

//Challenge Question #3
//Is every score an even number?
const everyEven = bowlingScores.every((score) => score % 2 === 0);
console.log("Are every score even?: ", everyEven);