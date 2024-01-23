//squares nubers ends with this digits 0, 1, 4, 5, 6, or 9
//4, 9, 16, 26, 36, 49, 64, 81

const arraySquare = (numberSequence) => {
  const perfectSquares = [4, 9, 16, 26, 36, 49, 64, 81];

  const arrayNumbers = [];
  for (let i = 0; i < numberSequence; i++) {
    arrayNumbers[i] = i + 1;
  }
  const usedNumbers = [];
  const generateRandomNumber = () => {
    let numeroAleatorio = Math.floor(Math.random() * numberSequence + 1);
    return numeroAleatorio;
  };

  for (let i = 0; i < numberSequence; i++) {
    if (usedNumbers.length === 0) {
      const firstNumber = generateRandomNumber(arrayNumbers);
      usedNumbers.push(firstNumber);
      arrayNumbers.splice(firstNumber + 1, 1);
    }

    const nextNumber = arrayNumbers.filter((n, index) => {
      let lastIndex = usedNumbers.length - 1;
      const sum = n + usedNumbers[lastIndex];

      if (perfectSquares.includes(sum)) {
        return n;
      }
    });

    console.log(nextNumber);

    usedNumbers.push(nextNumber[0]);
    console.log(usedNumbers);
    const index = arrayNumbers.indexOf(nextNumber[0]);

    arrayNumbers.splice(index, 1);
  }

  return usedNumbers;
};

console.log(arraySquare(15));
