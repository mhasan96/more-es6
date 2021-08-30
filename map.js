const numbers = [4, 6, 8, 10];
const output = [];

// function doubeleOld(number){
//     return number *2;

// }

const doubleIt = (number) => number * 2;
for (const number of numbers) {
  result = number * 2;
  output.push(result);
}
// console.log(output);
// 1. loop through each element
// 2. element diye function ke call korbe
// 3. result ekta array er moddhe push korsi
const output2 = numbers.map(doubleIt);
console.log(output);
