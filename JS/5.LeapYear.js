// 1. Write a function that tells if provided year is a leap year or not
const leapYear = (year) => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        return `${year} is a leap year`;
    }else{
        return `${year} is not a leap year`
    }
}
console.log(leapYear(2000));
console.log(leapYear(1900));
console.log(leapYear(2020));

//teritary way
const Leaps = (year) =>
    (year % 4 ===0 && (year % 400 === 0 || year % 100 !== 0))
    ? `${year} is a leap year`
    : `${year} is not a leap year`
 console.log(Leaps(1900));
 console.log(Leaps(2028));
 
