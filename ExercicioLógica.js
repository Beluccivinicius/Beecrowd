// Exercicios:
// 1. Achar a maior carta de um baralho
// 2. Ordenar um baralho
// 3. Embaralhar um baralho ordenado

// Regras:
// Não pode usar map, filter, reduce, forEach. Só pode usar for
// Não pode usar sort, Math.max, Math.min, etc

const box = [1, 5, 6, 9, 8];

function mainGetHigher(box) {
  let trash = [];
  let hand = null;
  for (let i = 0; i < box.length; i++) {
    if (box[i] > hand) hand = box[i];
  }
  return hand;
}

console.log(mainGetHigher(box));

const boxdisordered = [10, 6, 5, 3, 2, 8];

const mainOrdering = (boxDisordered) => {
  const boxOrdered = [];
  const quantityCard = boxDisordered.length;

  for (let j = 0; j < quantityCard; j++) {
    let hand = boxDisordered[0];
    for (let i = 0; i < quantityCard; i++) {
      if (hand > boxDisordered[i]) {
        hand = boxDisordered[i];
      }
    }
    boxOrdered.push(hand);
    const index = boxDisordered.indexOf(hand);
    boxDisordered.splice(index, 1);
  }

  return boxOrdered;
};

console.log(mainOrdering(boxdisordered));

const cardsToShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mainShuffle = (cardsToShuffle) => {
  let hand;
  const shuffleCards = [];

  for (let i = 0; i < cardsToShuffle.length; i++) {
    let randomNumber = Math.floor(Math.random() * cardsToShuffle.length);
    shuffleCards.push(randomNumber);
  }
  return shuffleCards;
};

console.log(mainShuffle(cardsToShuffle));
