//Write a function that calculates and returns the average of a set of numbers
function AverageCalc(numbers) {
    console.log(numbers);
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]

    }
    let result = sum / numbers.length
    return result


}
console.log(AverageCalc([1, 2, 8]));
console.log(AverageCalc([10, 20, 30]));
