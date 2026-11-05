// //Square roots of numbers
// let num = 10;
// for (let i = 1; i <= num; i++) {
//     for (let j = i; j <= i; j++) {
//         console.log(i * j);
//     }
// }

//1. Write a function that calculates factorial of a given number
//My way
let num = 8
let result = 1;
for (let i = 1; i <= num; i++) {
    result = result * i;
}
console.log(`The Factorial of number ${num} is ${result}`);


function factorial(inputNumber) {
    if (inputNumber < 0) {
        throw new Error("inputNumber should be greather than or equal to zero")
    }
    if (typeof inputNumber !== "number") {
        throw new Error("Please enter a number no string allowed")
    }
    let result = 1;
    for (let i = 1; i <= inputNumber; i++) {
        result *= i
    }
    return result
}
console.log(factorial(8));


//Another way Recurssion
//repeating and calling smth is called recurssion
function RecurFact(inputNumber) {
    if(inputNumber === 0 || inputNumber ===1){
        return 1;
    }
    return inputNumber * RecurFact (inputNumber - 1)

}
console.log(RecurFact(45));
