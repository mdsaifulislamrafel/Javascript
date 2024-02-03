function maxLatter (str) {
    const words = str.split(' ');
    let latterSize = 0;
    let showLatter = '';
    for(const car of words) {
        if(car.length > latterSize) {
            latterSize = car.length;
            showLatter = car;
        }
    }
    return showLatter;
}

let inputString = 'I am learning Programming to become a programmer';

console.log(maxLatter(inputString));
