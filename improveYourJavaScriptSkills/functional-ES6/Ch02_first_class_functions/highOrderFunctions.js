// const divide = (x,y) => {
//     if(y===0){
//         console.log("Error: dividing by zero");
//         return null;
//     }
//     return x/y;
// }
// Functions should only have one responsibility => refactor as below

const divide = (x,y) => x/y;

//check that the second argument isn't zero
const secondArgumentIsntZero = func => 
    (...args) => {
        if(args[1]===0){
            console.log("Error: dividing by zero");
            return null;
        }
        return func(...args);
    }

const divideSafe = secondArgumentIsntZero(divide);
console.log(divideSafe(7,0));
console.log(divideSafe(5,3));

//run code npx babel-node highOrderFunction.js