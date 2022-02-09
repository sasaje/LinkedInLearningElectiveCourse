const grades = [99, 83, 87, 91, 77];

//Find the first grade that is less than 80.

const under80 = grades.find((element) => element < 80);
console.log(under80);

//Find the index of the first grade that is over 80.
const over80 = grades.findIndex((element) => element > 80);
console.log(over80);
