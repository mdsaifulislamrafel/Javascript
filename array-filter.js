const numbers = [25, 11, 55, 66, 20, 80, 22, 77, 44, 88, 100, 200, 300, 50, 67];
const sum = [];
for (let i = 0; i < numbers.length; i++) {
    const res = numbers[i];
    if (res <= 100) {
        sum.push(res);
    }
    
}
console.log(sum);