const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var evenNumbers = [];

// for(let i = 0; i< numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         evenNumbers.push(numbers[i]);
//     }
// } refactor using filter

const isEven = x => x % 2 === 0;
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

//with words

const words = [
    'hello',
    'goodbye',
    'the',
    'Antarctica',
];

// const isLongerThan5 = word => word.length >5;
// const longWords = words.filter(isLongerThan5);
// console.log(longWords);

// higherOrder function to simplify the code above

const createLenghtTest = minLength => 
    word => word.length > minLength;

const longWords = words.filter(createLenghtTest(5));
console.log(longWords);
