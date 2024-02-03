// simple logic 
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true + ' ' + 'Your year is a leap year';
    } else {
        return false + ' ' + 'Your year is a not leap year';
    }
}

const result = isLeapYear(2006);
// console.log(result);f

function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }else if (year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const result2 = isLeapYear2(2004);
console.log(result2)