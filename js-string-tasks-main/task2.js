const latter = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium error placeat eum necessitatibus animi natus ut laboriosam iusto voluptates doloremque!';
let count = 0;
for (let i = 0; i < latter.length; i++) {
    if(latter[i].toUpperCase() === 'A') {
        count++;
    }
}
console.log(count);