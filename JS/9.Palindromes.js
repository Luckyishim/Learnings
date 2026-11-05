// //Write a function that checks if a string is palindrome or not
// function palindrome(inputString) {
//     for (let i = 0; i <= inputString.length / 2; i++) {
//         if (inputString[i] !== inputString[inputString.length - 1 - i]) {
//             return false
//         }
//     }
//     return true

// }
// console.log("madam", palindrome("madam"));
// console.log("level", palindrome("level"));


// function palindrome2(inputString) {

//     inputString = inputString.toLowerCase()
//     let start = 0;
//     let end = inputString.length - 1
//     for (start, end; start < end; start++, end--) {
//         if (inputString[start] !== inputString[end]) {
//             return false
//         }
//     }
//     return true
// }
// console.log("lorrol", palindrome2("Lorrol"));


function plaindrome3(inputString) {
    inputString = inputString.toLowerCase()
    const splittedInput = inputString.split('')
    const reveresedInput =splittedInput.reverse()
    const reveresedString = reveresedInput.join('')
    if(reveresedString === inputString){
        return true
    }else{
        return false
    }
    
}
console.log("lorol", plaindrome3("lorrol"));
