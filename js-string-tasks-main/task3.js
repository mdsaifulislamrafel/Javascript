
function containsAllVowels(inputString) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let vowel of vowels) {
        if (!inputString.toLowerCase().includes(vowel)) {
            return false;
        }
    }

    return true;
}

// Example usage:
const testString = 'aeou are present';
const result = containsAllVowels(testString);

if (result) {
    console.log('The string contains all the vowels.');
} else {
    console.log('The string does not contain all the vowels.');
}
