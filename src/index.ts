// nipes p paus, c copas, e espadas, o ouros
let manilhas = ['4z', '7c', 'ae', '7o']

// enum Carts {
//   'Ao' = 11,
//   '2o' = 12,
//   '3o' = 13,
//   '4o' = 14,
//   '5o' = 15,
//   '6o' = 16,
//   '7o' = 17,
//   'Qo' = 18,
//   'Jo' = 19,
//   'Ko' = 20,
//   'Ac' = 21,
//   '2c' = 22,
//   '3c' = 23,
//   '4c' = 24,
//   '5c' = 25,
//   '6c' = 26,
//   '7c' = 27,
//   'Qc' = 28,
//   'Jc' = 29,
//   'Kc' = 30,
//   'Ae' = 31,
//   '2e' = 32,
//   '3e' = 33,
//   '4e' = 34,
//   '5e' = 35,
//   '6e' = 36,
//   '7e' = 37,
//   'Qe' = 38,
//   'Je' = 39,
//   'Ke' = 40,
//   'Az' = 41,
//   '2z' = 42,
//   '3z' = 43,
//   '4z' = 44,
//   '5z' = 45,
//   '6z' = 46,
//   '7z' = 47,
//   'Qz' = 48,
//   'Jz' = 49,
//   'Kz' = 50,
// }

let baralho = [
  'Ao', '2o', '3o', '4o', '5o', '6o', '7o', 'Qo', 'Jo', 'Ko',
  'Ac', '2c', '3c', '4c', '5c', '6c', '7c', 'Qc', 'Jc', 'Kc',
  'Ae', '2e', '3e', '4e', '5e', '6e', '7e', 'Qe', 'Je', 'Ke',
  'Az', '2z', '3z', '4z', '5z', '6z', '7z', 'Qz', 'Jz', 'Kz',
]

const sortedCards: number[] = [];

function getCard() {
  return Math.floor(Math.random() * 39);
}

function getNotSortedCard(sortedCards?: number[]) {
  let card = getCard();
  if (sortedCards) while (sortedCards.includes(card)) {
    card = getCard()
  }
  return card;
}

function getRandom() {
  const firstCartIndex = getNotSortedCard(sortedCards)
  sortedCards.push(firstCartIndex);
  let secondCartIndex = getNotSortedCard(sortedCards)
  sortedCards.push(secondCartIndex);
  let thirdCartIndex = getNotSortedCard(sortedCards)
  sortedCards.push(thirdCartIndex);
  return { firstCart: baralho[firstCartIndex], secondCart: baralho[secondCartIndex], thirdCart: baralho[thirdCartIndex] }
}

const player1 = getRandom();
const player2 = getRandom();
const player3 = getRandom();
const player4 = getRandom();

function findDuplicatedCards() {
  return sortedCards.filter((e, i, a) => a.indexOf(e) !== i) 
}

console.log(findDuplicatedCards());
console.log({ sortedCards, player1, player2, player3,player4 });