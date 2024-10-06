// 1. Parsing JSON
// Parsing means converting a JSON string into a JavaScript object that you can manipulate in your code.
// JSON to JS Object

const details = `{
  "name": "User1",
  "age": 30,
  "isStudent": false,
  "address": {
    "city": "Jind",
    "pincode": 126102,
  },
}`;

const output = JSON.parse(details)

// 2. Stringifying JSON
// Stringifying means converting a JavaScript object into a JSON string, which is useful for sending data to an API or saving it in a text-based format.
// JS Object to JSON

const details1 = {
  name: "User1",
  age: 30,
  isStudent: false,
  address: {
    city: "Jind",
    pincode: 126102,
  },
  sum: (a,b)=>{
    return a+b
  }
};

const conversionJSON = JSON.stringify(details1)

console.log(conversionJSON);