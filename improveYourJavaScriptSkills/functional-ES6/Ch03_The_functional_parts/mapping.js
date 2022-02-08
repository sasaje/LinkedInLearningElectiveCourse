const numbers = [1, 2, 3, 4, 5];

// for(let i=0; i < numbers.length; i++){
//     dobbeldNumbers.push(numbers[i]*2);
// } => mapped it below

const double = x => x*2;

const doubledNumbers = numbers.map(double);

console.log(doubledNumbers);