let deck = [];
let player1Hand = [1, 2, 2, 2, 3, 3, 7, 7];
let player2Hand = [4, 5, 6, 7];
let player1ScorePile = [];
let player2ScorePile = [];
let player1Score = 0;
let player2Score = 0;

function askAndTake(cardAsked, playerAskingHand, handToCheck) {
  if (check(cardAsked, handToCheck) == true) {
    playerAskingHand.push(cardAsked);
  }
}

function check(cardAsked, handToCheck) {
  for (let i = 0; i < handToCheck.length; i++) {
    if (handToCheck[i] == cardAsked) {
      return true;
    }
  }
  return false;
}

// function checkPairs(handToCheck) {
//   let pairs = handToCheck.filter(function(item, index) {
//     return handToCheck.indexOf(item) >= index;
//   });
//   console.log(pairs);
// }

// checkPairs(player1Hand);

function findPairs(hand, winningPile) {
  //get index position
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === hand[i + 1]) {
      let pairs = hand.splice(i, 2);
      winningPile.push(pairs);
    }
  }
}

findPairs(player1Hand, player1ScorePile)
console.log(player1Hand, player1ScorePile)
// person1Hand = [1, 2, 2, 3];
// person2Hand = [4, 5, 6, 7];
// discard1 = [];
// discard2 = [];
// deck = [0 - 51];



// function score


// function ask() {
//   // do something
// }

// function respond() {
//   // do something
// }

// function respond(cardAsked) {
//   let haveCard = false;
//   for (let i = 0; i < person2Hand.length; i++) {
//     if (person2Hand[i] == cardAsked) {
//       haveCard = true;
//     }
//   }
//   // need to somehow return havecard value <<-
// }

// function ask(someNum) {
//   if (respond(someNum) == true) {
//     person1Hand.push(someNum);
//     console.log(person1Hand);
//   }
// }

// ask(10);

// Parametized Example Functions with Return
// function paramFun(param1, param2) {
//   value = param1 * param2;
//   return value;
// }

// let product = paramFun(1, 2);
// console.log(product);


// Parametized Card Function With Return
// function responderParam(card) {
//   if (card == 8) {
//     haveCard = true;
//   } else {
//     haveCard = false;
//   }
//   // return haveCard;
// }

// responderParam(10);


// Parametized Example Functions with Return
// function paramFun(param1, param2) {
//   let value = param1 * param2;
//   return value;
// }

// let product = paramFun(6, 2);
// console.log(product);
