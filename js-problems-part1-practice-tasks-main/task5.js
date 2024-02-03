let randomNumber = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber)


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber2 = generateRandomNumber(10, 20);
console.log(`Random number between 10 and 20: ${randomNumber2}`);
