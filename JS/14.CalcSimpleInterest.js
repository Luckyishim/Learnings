//Write a function that calculates and prints the simple interest on a loan amount
function CalcSI(principal, interest, time) {
    let simpleInterest = (principal * interest * time) / 100
    simpleInterest = simpleInterest.toFixed(2)
    return simpleInterest
}
console.log(CalcSI(1000, 5, 1));
console.log(CalcSI(20000.88, 10.755, 5));
