function evanNumber(n) {
    if (n % 2 === 0) {
        return n * 2;
    } else {
        return n / 2;
    }
}

const result = evanNumber(12);
console.log(result)