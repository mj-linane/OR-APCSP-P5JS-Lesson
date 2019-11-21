// /**
//  *Countdown from a given integer to 0 and prints to console.
//  *
//  * @param {*} number
//  */
// function countdown(number) {
//   let x = number;
//   while (x != 0) {
//     console.log(x);
//     x = x - 1;
//   }
// };

// countdown(10);

/**
 *Adds 2 dice integers randomly generated together for a sum.
 *
 */
// function diceRoll() {
//   let die1 = -1;
//   let die2 = -1;
//   let sum = -1;
//   while (sum != 11 && sum != 7) {
//     die1 = Math.floor(Math.random() * (+6 - +0)) + +0;
//     die2 = Math.floor(Math.random() * (+6 - +0)) + +0;
//     sum = (die1 + die2);
//     console.log(('you rolled a: ' + die1 + ' and: '
//       + die2 + ' with a sum of: ') + sum);
//   };

//   console.log('Done!');
// }

// diceRoll();

let coin = -1;
let count = 0;
let heads = 0;

while (heads < 10000) {
  coin = Math.floor(Math.random() * (+2 - +0)) + +0;
  count = count + 1;
  console.log('Count' + count);
  if (coin == 1) {
    heads++;
  }
  console.log('Heads: ' + heads);
};

console.log('The coin has been flipped' + count + 'times');
