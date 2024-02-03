function noDuplicate(array) {
    let unique = [];
    for(const item of array) {
        if(unique.includes(item) == false) {
            unique.push(item);
        }
    }
    return unique;

}

const names = ['Rafel', 'Rasel', 'Saiful', 'Rafel'];
const result = noDuplicate(names);
console.log(result)