const ages = [18, 33, 71, 29, 65, 62];
//How do we add 36 to the array of ages?

ages.unshift(36);
console.log(ages);

const holidays = ['Labor Day', 'Christmas', 'Hanakkuh', 'Independence Day'];
//How do we remove the fist item from the holidays array?
//Store the element that is removed in a variable.
const shiftedValue = holidays.shift();
console.log(shiftedValue);
console.log("Original:", holidays);