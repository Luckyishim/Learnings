//Write a function that generates and prints a multiplication table for a given number up to a specified range
// let multi = 67;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${multi} * ${i} = ${multi * i}`)
// }

//Tutorial Way
function multiplication(tableOf, tableTill) {
    console.log(tableOf, tableTill);
    for (let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} * ${i} = ${i * tableOf}`);
    }
}
multiplication(4, 10)


//Square roots of numbers
let num = 10;
for (let i = 1; i <= num; i++) {
    for (let j = i; j <= i; j++) {
        console.log(i * j);
    }
}