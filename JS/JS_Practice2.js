//1. Write a function that tells if a given number is even or odd
let func = (a) => {
    if (a % 2 == 0) {
        return `The number ${a} is even`
    } else {
        return `The number ${a} is odd`
    }
}
console.log(func(0));

//terniary way  Sajilo way
function checkOddEven(a) {
    return a % 2 == 0 ? "even" : "odd";
}
console.log(checkOddEven(10));

//2. Write a function that finds and prints the smallest number among three given numbers;
function findSmallNumber(a, b, c) {
    if (a < b && a < c) {
        return `${a} is the smallest number`
    } else if (b < c && b < a) {
        return `${b} is the smallest number`
    } else {
        return `${c} is the smallest number`
    }
}
console.log(findSmallNumber(15, 20, 0));


//
function smallestOfThree(a, b, c) {
    let smallestNumebr = a;
    if(b <smallestNumebr){
        smallestNumebr = b;
    }
    if(c < smallestNumebr){
        smallestNumebr = c;
    }
    return smallestNumebr
}
console.log(smallestOfThree(1.5,2,5));
