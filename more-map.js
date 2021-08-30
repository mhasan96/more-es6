const friends = ["Tom Hanks", "Tom Cruise", "Tom Brady", "Tom Solaiman"];

const fLengths = friends.map((friend) => friend.length);
// console.log(fLengths);

const products = [
  {
    name: "water bottle",
    price: 50,
    color: "yellow",
  },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 5000, color: "white" },
  { name: "water glass", price: 30, color: "white" },
  { name: "sticky note", price: 50, color: "pink" },
];

// Map Pura kaj ta kore ekta Array Amake return korbe
const productNames = products.map((pd) => pd.name);
const productPrices = products.map((pdPrice) => pdPrice.price);
//For Each Map er motoi kaj korbe but amake kono kichu return korbe nah.
products.forEach((pd) => console.log(pd));
// console.log(productNames);
// console.log(productPrices);
