const fish = {
  name: "King Hilsha",
  id: 58,
  price: 9000,
  phone: "017175555555",
  address: "chandpur",
  dress: "silver",
};

//Onek bar use korle object bar bar call nah kore just ek jaygay store kore oita call korlei holo. like fish.phone evabe bar bar call korar dorkar
const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
// More efficient way
const { phone, price, dress, id } = fish;

console.log(phone, dress, price);

const company = {
  name: "GP",
  ceo: { id: 1, name: "ajmol", food: "fuchka" },
  web: {
    work: "website Development",
    employee: 22,
    framework: "react",
    tech: {
      first: "html",
      second: "css",
      third: "js",
    },
  },
};
// const {jar jar value lagbe} = value gulah jekahne ase
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
