//Write a function that finds all the factors of a given number

//Specific factor of one number
// function FindFactor(inputString) {
//     let factor = 14
//     if (factor % inputString == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(FindFactor(3));
// console.log(FindFactor(7));


//All factors
function findAllFactors(number){
    for(let i=1; i<=number; i++){
       if( number % i ==0){
        console.log(i, "is a factor");
        
       }else{
        console.log(i, "is NOT a factor");
        
       }
    }
    
}
findAllFactors(9)
