// big number

const height = [12, 55, 66, 20, 100];
function hightSize(number) {
    let sum = number[0];
    for(const num of number) {
        if(num > sum){
            sum = num;
        }
    }
    return sum;
}

console.log(hightSize(height));


// small number

const height2 = [12, 55, 66, 20, 100];
function minNumber (number) {
    let sum = number[0];
    for(const num of number) {
        if(num < sum) {
            sum = num;
        }
    }
    return sum;
}

console.log(minNumber(height2))