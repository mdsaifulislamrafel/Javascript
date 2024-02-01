const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const rev = number.reverse();
// console.log(rev)

const reverse_number = [];
for(const num of number) {
    // console.log(num)
    reverse_number.unshift(num);
   
}
// console.log(reverse_number)
const rev_rev_number = [];
for(let i = number.length -1; i >= 0; i--) {
    const num = number[i];
    rev_rev_number.push(num);
}
console.log(rev_rev_number);

