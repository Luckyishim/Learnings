//Write a function that finds and prints the maximum element in an array of numbers.
let num = [4, 85, 5, 2, 67]
let largest = num[0]
for (let i = 1; i < num.length; i++) {
    if (num[i] > largest) {
        largest = num[i]
    }
}
console.log(largest);





// function findTheBiggestNumber(arrayOfNumbers) {
//     console.log(arrayOfNumbers);
//     let biggestNumber = arrayOfNumbers[0];

//     for (let i = 1; i < arrayOfNumbers.length; i++) {
//         if (arrayOfNumbers[i] > biggestNumber) {
//             biggestNumber = arrayOfNumbers[i]
//         }
//     }
//     return biggestNumber
// }
// console.log(findTheBiggestNumber([4, 5, 2]));


//Sajilo Way
function Biggest(arrayOfNumbers) {
    const maxNum = Math.max(...arrayOfNumbers)
    console.log(maxNum);
}
console.log(Biggest([1, 52, 5, 67]));


