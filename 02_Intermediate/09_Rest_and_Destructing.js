let Cricketers = {
    player1: "Rohit Sharma",
    player2: "Virat Kohli",
    player3: "Ravi Ashwin",
    player4: "Ravi Jadeja",
    player5: "Bhuvi"
}

// console.log(Cricketers.player2);

const {...players} = Cricketers;
// console.log(player2,"\n",player1);
console.log(players);
// console.log();




// Rest Operator

// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest); // Output: [3, 4, 5]s sir

// let numbers = [1,2,3]
// console.log(...numbers);

// Reduce function

// function sum(...numbers){
//      return numbers.reduce((current,next)=>
//      current+next, 10
//     );
// }

// console.log(sum(1,2,3));





