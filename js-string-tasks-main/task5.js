const latter = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur consequuntur dolorem officia officiis aliquam.';

let first = latter.split(' ');
for (let i = 0; i < first.length; i++) {
    first[i] = first[i][0].toUpperCase() + first[i].substring(1);
}
const result = first.join(' ');
console.log(result)
