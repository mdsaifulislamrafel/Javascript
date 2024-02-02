// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(number) {
    let sum = 0;
    for (const numbers of number) {
        const num = numbers;
        sum += num;
    }
    return sum

}

const result = make_avg([5, 10, 55, 55, 66, 11, 55, 11, 10]);
console.log(result)