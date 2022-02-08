const employees = [{
    name: "John Olsen",
    age: 54,
    jobTitle: "developer",
    salary: 70000,
},{
    name: "Karen Norris",
    age: 34,
    jobTitle: "engineer",
    salary: 75000,
},{
    name: "Norris Smith",
    age: 31,
    jobTitle: "developer",
    salary: 76000,
},{
    name: "Jane Doe",
    age: 24,
    jobTitle: "secretary",
    salary: 18000,
},{
    name: "Daryl Cline",
    age: 25,
    jobTitle: "secretary",
    salary: 25000,
}];

//developers salaries average
const developers = employees.filter(employee =>
    employee.jobTitle === "developer");
console.log(developers);

const developerSalaries = developers.map(developer=> developer.salary);
const totalDeveloperSalary = developerSalaries.reduce((acc,x) => acc +x, 0);
const averageDeveloperSalary = totalDeveloperSalary/developerSalaries.length;
console.log(averageDeveloperSalary);

//non developers salaries average
const nonDevelopers = employees.filter(employee => 
    employee.jobTitle !== "developer");
const nonDeveloperSalaries = nonDevelopers.map(nonDev => nonDev.salary);
const totalNonDeveloperSalary = nonDeveloperSalaries.reduce((acc,x) => acc + x, 0);
const averageNonDeveloperSalary = totalNonDeveloperSalary/nonDeveloperSalaries.length;
console.log(averageNonDeveloperSalary);
