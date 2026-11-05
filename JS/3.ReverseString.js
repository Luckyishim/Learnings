//1. Write a function that returns of a string  
function reversing(inputString) {

    //only string are allwowed
if(typeof inputString !== 'string'){
    throw new Error("Only strings are allowed")
} 
    let result = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        result += inputString[i]
    }
    return result;
}


//another way
function reverseString(inputString){
    const split = inputString.split('')
    const reverse = split.reverse();
const result = split.join('')
    console.log(result);
}


//console
console.log(reversing("Rajkarnikar"));
console.log(reverseString("Lucky"));
// console.log(reversing(848959));
