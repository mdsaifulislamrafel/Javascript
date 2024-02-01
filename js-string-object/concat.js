const first = "Md Saiful";
const last = "Islam Rafel";
const fullName = first + " " + last;
// console.log(fullName);
const fullName2 = first.concat(" ",last);
// console.log(fullName2);

const fullName3 = first.concat(" ").concat(last);
console.log(fullName3);

// any character find out
console.log(last.includes("I"));