// // 1. Write a function that calculates and prints the sum of the digits of a given number.
// function sumOfDigits(inputNumber) {
//     if (inputNumber < 1) {
//         throw new Error("inputNumber must be a positive number")
//     }
//     const inputNumberAsString = inputNumber.toString();
//     const splitting = inputNumberAsString.split('');
//     let Sum = 0;
//     splitting.forEach(num => {
//         Sum += parseInt(num)
//     })
//     return Sum
// }
// console.log(sumOfDigits(67));

// //My Way
// let digits = String(67)
// let sum = 0;

// for (let i = 0; i < digits.length; i++) {
//     sum += Number(digits[i])
// }
// console.log(`The sum of digits ${digits} is ${sum}`)

//Another way
function Calc(inputNumber) {
    let number = inputNumber
    let sumofDigits = 0;
    while (number > 0) {
        let lastDigit = number % 10;
        sumofDigits += lastDigit
        number = Math.floor(number / 10)
       
    }
    return sumofDigits
}
console.log(Calc(4540842984654244298429842982));

