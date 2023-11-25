// nipes p paus, c copas, e espadas, o ouros
let manilhas = ['4z', '7c', 'Ae', '7o']

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

// console.log(findDuplicatedCards());
console.log({player1, player2, player3,player4 });