/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;
let currentNumber = 1;
while(true) {
    sum += currentNumber;
    if(sum >= 100) {
        console.log("Sum reached or exceeded 100. Exiting loop.");
        break;
    } 
    currentNumber++;
}
console.log("Final sum:", sum);