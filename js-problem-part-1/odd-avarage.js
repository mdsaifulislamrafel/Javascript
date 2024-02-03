function odd_average(numbers) {
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1) {
            odds.push(number) ;
        }
    }

    let sum = 0
    for(const number of odds) {
        sum += number;
    }
    const count = odds.length;
    const avg = count / sum;
    return avg;
}

const num = [1, 2, 5, 1, 2, 3, 6, 5, 2, 15];
const result = odd_average(num);
console.log(result);
