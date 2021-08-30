// class hocche emon jinish jeta diye ami onnano jinish banabo Like Object
// Class er name Shadharonoto Capital letter use hoy
class Support {
  name;
  designation = "Support Web Developer";
  address = "BD";
  // Constructor hocche special function
  constructor(name, address) {
    this.name = name; // name ke call kora
    this.address = address; // address call kora
  }
  startSession() {
    console.log(this.name, "Start a support session ");
  }
}
// Class theke Object banano
const aamir = new Support("Amir Khan", "BD");
const salman = new Support("Solaiman Khan", "Dubai");
aamir.startSession();
salman.startSession();
console.log(aamir, salman);
