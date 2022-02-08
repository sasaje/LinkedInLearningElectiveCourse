const employees = [{
    name: "Jane Doe",
    salary: 90000,
},{
    name: "Jamie Jones",
    salary: 65000,
},{
    name: "Donna Apple",
    salary: 1500000,
},{
    name: "John Smith",
    salary: 250000,
}];

const makesMoreThanOneMillion = employee => 
    employee.salary > 1000000;

const result = employees.some(makesMoreThanOneMillion);

console.log(result);

// form check if a field is not filled in form

const formValues = [
    'Jane',
    'Doe',
    'Maine',
    '', 
];

const isNotEmpty = string => !!string;
const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled);