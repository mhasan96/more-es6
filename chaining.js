// declare variabl based on the name of an object property

const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, z } = myObject;
//optional chaining onek ta try catch er moto..

console.log(x, z);
//optional chaining onek ta try catch er moto kaj kore.. ? ? gula onek ta if else er moto ase kina nai check kore
console.log("myObject.p", myObject?.p?.q);
// destructuring in array

//Object er moto nile object er moto banate hobe
// array er moto nile array er moto banate hobe.

const [p, q] = [37, 45, 65, 89];
console.log(p, q);

//chaining
