const statement = 'I am a junior developer';
let res = '';
for(let i = statement.length -1; i >= 0; i--) {
    res += statement[i];
}
console.log(res);