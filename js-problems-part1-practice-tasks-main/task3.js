function stringNumber (str) {
    const vowel = 'aeiouAEIOU';
    let count = 0;
    for(const char of str) {
        if(vowel.includes(char)){
            count++;
        }
    }
    return count;
}

const name = 'Write a function to count the number of vowels in a string';
console.log(stringNumber(name));