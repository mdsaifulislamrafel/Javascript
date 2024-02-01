/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const price = 800;
const age = 9;
const student = true;
if (age < 10) {
    console.log('Small children : ' ,'Free');
} else if (student == true) {
    const total = price * 50 / 100;
    console.log('student price :', total);
} else if (age >= 60) {
    const total = price * 15 / 100;
    console.log(total);
} else {
    console.log('Regular ticket fare 800 tk');
}