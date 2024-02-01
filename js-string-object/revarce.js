const sentence = "I am learning web development";
let reverse = '';
for(const letter of sentence) {
    reverse = letter + reverse;
}
// console.log(reverse);
let rev = '';
for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    rev = element + rev;
}
// console.log(rev);


// shortcut system

const reverses = sentence.split('').reverse().join('');
console.log(reverses);