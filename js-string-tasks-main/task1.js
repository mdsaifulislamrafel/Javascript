const latter = ' ALorem ipsum adolor sit amet consectetur adipisicing elit. Odio, ipsam.';
let count = 0;
for(let i = 0; i < latter.length; i++) {
    if(latter[i].toLowerCase === 'a') {
        count++;
    }
}
console.log(count)