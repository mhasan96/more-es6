const numbers = [5, 13, 7, 41, 29, 79, 30, 5, 2, 19];

// filter hocche kichu checkpoint thakbe oi wise kichu ami nibo and kichu ami nibo

const bigNumber = numbers.filter((number) => number > 20);
// console.log(bigNumber);

const products = [
  {
    name: "water bottle",
    price: 50,
    color: "yellow",
  },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 5000, color: "white" },
  { name: "water glass", price: 30, color: "white" },
  { name: "sticky note", price: 25, color: "pink" },
];
//filter
const expensive = products.filter((pd) => pd.price > 100);
console.log(expensive);

// find
const whiteItem = products.find((pd) => pd.color == "pink");
console.log(whiteItem);
