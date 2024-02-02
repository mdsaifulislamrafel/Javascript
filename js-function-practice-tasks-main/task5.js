// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

function odd_even(number) {
    if (number % 2 === 0) {
        return 'Yes your number is a even : ' + number;
    } else {
        return 'No. Your number is a odd : ' + number;
    }

}
const result = odd_even(12);
console.log(result);


