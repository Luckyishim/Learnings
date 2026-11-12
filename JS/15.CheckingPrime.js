//Write a function that tells if the given number is prime or not


function isPrime(num) {
    let result = true
    for (let i = 2; i < num; i++) {
        console.log(num, "%", i, "=", num % i);
        if (num % i === 0) {
            return false
            break
        }
    }
    return result
}
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(68));


function prime2(inputNum) {
    let result = true
    if (inputNum % 2 == 0) {
        result = false
    }

    if (result === true) {
        for (let i = 3; i < inputNum; i = i + 2){
         if(inputNum % i ===0){
            result = false
            break
         }
            
        }
    }
    return result
}
console.log(prime2(97));
