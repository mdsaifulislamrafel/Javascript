function layerPrice(quantity) {
    const first = 100;
    const second = 90;
    const third = 70;
    if (quantity <= 100) {
        const total = quantity * first;
        return total;
    } else if (quantity <= 200) {
        const first100Total = first * 100;
        const avgTotal = quantity - 100;
        const total = avgTotal * second;
        const result = total + first100Total;
        return result;
    } else {
        const first100Total = first * 100;
        const second100Total = second * 100;
        const avgTotal = quantity - 200;
        const total = avgTotal * third;
        const result = total + first100Total + second100Total;
        return result;

    }
}

// console.log(layerPrice(201))


const number = 'rafel';
number.toUpperCase;
console.log(number)