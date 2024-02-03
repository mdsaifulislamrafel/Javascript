function countNumber (number, findNumber) {
    let count = 0;
    for(let i = 0; i < number.length; i++) {
        if(number[i] === findNumber) {
            count++;
        }
    }
    return count;
}

let numbers = [5, 6, 11, 12, 98, 5];
let find = 25;
const result = countNumber(numbers, find);
console.log(result);