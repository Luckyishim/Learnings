//Write a function that returns the result of raising a given number to a specified pwoer.
function calcPower(base, exponent) {
    let result = 1
    for (let i = 1; i <= exponent; i++) {
        result *= base

    }
    return result
}
console.log(calcPower(2, 3));
console.log(calcPower(5, 4));





