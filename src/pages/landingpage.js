// var romanToInt = function (s) {
//   // STORE VALUE OF EACH NUMERALS

//   let roman = {
//     1: "I",
//     5: "V",
//     10: "X",
//     50: "L",
//     100: "C",
//     500: "D",
//     1000: "M"
//   }
 
// };
let arrary = [1000, 100, 1000, 10, 100]
let result = []
for (i = 0; i > arrary.length-1; i++) {
  if (arrary[i] > arrary[i+1]) {
   result.push(arrary[i])
  } else if (arrary[i] > arrary[i+1] && arrary[i] * 10 >= arrary[i+1]) {
    result.push(arrary[i++] - array[i])
  }
}
console.log(result);

const numbers = [1, 2, 3, 4, 5];
const max = numbers.reduce((accumulator, current) => {
 accumulator + current
}, 0);
