// 12 inch 1 feet


function inchToFeet(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch.';
    return result
}

const result = inchToFeet(75);
// console.log(result);


function mileToKiloMiter(mile) {
    const result = mile * 1.60934;
    return result;
}
const result2 = Math.round(mileToKiloMiter(12));
// console.log(result2)


function kiloMiterToMile(kilo) {
    const result = kilo * 0.621371;
    return result;
}
const result3 = kiloMiterToMile(12);
console.log(result3.toFixed(2))