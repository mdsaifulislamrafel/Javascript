// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(binaryString) {
//     if (typeof binaryString !== 'string') {
//         return 'Invalid string';
//     }
//     let sum = 0;
//     for (let i = 0; i < binaryString.length; i++) {
//         if (binaryString[i] == '0') {
//             sum++;
//         }
//     }
//     return sum;
// }


// let name = count_zero('0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0');
// console.log(name)

function count_zero(binaryString) {

    let sum = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] == '0') {
            sum++;
        }
    }
    return sum;
}


const result2 = count_zero('001000101010101111101001010101000');
console.log(result2);