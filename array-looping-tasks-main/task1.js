// first way
const color = ['red', 'blue', 'green', 'yellow', 'orange'];
const rev = color.reverse();
console.log(rev);

// second way
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let revv = [];
for(let i = colors.length -1; i >= 0; i--) {
    const result = colors[i];
    revv.unshift(result);
}
console.log(revv);