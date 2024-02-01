// for(let i = 0; i < 20; i++) {
//     if(i % 2 === 1) {
//         console.log("Your number is a odd", i);
//     }
// }

// for(let i = 1; i <= 30; i++) {
//     if(i % 5 === 0) {
//         console.log("Your number is a odd", i);
//     }
// }


// for(let i = 1; i <= 30; i++) {
//     if(i % 3 === 0 || i % 5 === 0) {
//         console.log("Your number is a odd", i);
//     }
// }

// for(let i = 1; i <= 30; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("Your number is a odd", i);
//     }
// }


// let total = 0;
// for(let i = 1; i <= 20; i++) {
//     if(i % 3 === 0) {
//        console.log(i);
//        total += i;
//         }
// }   
// console.log(total); 

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}