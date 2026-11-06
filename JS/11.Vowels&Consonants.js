//Write a function that counts and prints the number of vowels and consonants in a given string

function calcVowelandConsonants(inputString) {
    inputString = inputString.toLowerCase()
    inputString = inputString.replace(/ /g,'')
    console.log("After clean up the String is", inputString);
    
    const vowels = "aeiou"
    const consonants = "bcdfghjklmnpqrstvwxyz"

    let vowelCount = 0;
    let consonantCount = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (vowels.includes(inputString[i])) {
            vowelCount++;
        } 
        // else if (consonants.includes(inputString[i])) {
        else if(/^[a-z]$/.test(inputString[i])){
            consonantCount++;
        } else {
            console.log(inputString[i], "Is neither vowel nor consonant")
        }
    }

    return { vowelCount, consonantCount }
}
console.log(calcVowelandConsonants("Hello World"));
console.log(calcVowelandConsonants("Lucky Rajkarnikar 123"));


