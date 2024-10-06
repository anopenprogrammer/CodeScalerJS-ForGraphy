// function sum(...numbers){
//      return numbers.reduce((current,next)=>
//      current*next, 10
//     );
// }

// console.log(sum(1,2,3,4));

// When a function return another function, that function is called as higher order function

// // JSON to JS Object
// const details = {
//   "name": "User1",
//   "age": 30,
//   "isStudent": false,
//   "address": {
//     "city": "Jind",
//     "pincode": 126102,
//   },
// };

// const output = JSON.parse(details)

// console.log(output.age);

// JS Object to JSON

// const details = {
//   name: "User1",
//   age: 30,
//   isStudent: false,
//   address: {
//     city: "Jind",
//     pincode: 126102,
//   },
//   sum: (a,b)=>{
//     return a+b
//   }
// };

// const conversionJSON = JSON.stringify(details)

// console.log(conversionJSON);

let numbers = [1,2,3,4,5,6,7,8,9,10];

// const even_number = numbers.map((num)=>{
//     return (
//         num%2==0  //Evaluation
// )
// })

const even_number = numbers.filter((num)=>{
    return (
        num%2==0
)
})

// Filter returns the element in the array which satisfy the condition but map will not return the element instead it will return the result of condition in true or false

// console.log(even_number);

const jsonString = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(jsonString);
console.log(obj);

// JSON to JS Object
const details = `{
"name":"John",
"age":30, 
"city":"New York"}`;


