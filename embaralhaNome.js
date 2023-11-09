function embaralha(anyString) {
  const arrayString = anyString.split("");

  const quantityRepetition = arrayString.length;

  let outputSrtring = [];
  for (let i = 0; i < quantityRepetition; i++) {
    let randomNumber = Math.floor(Math.random() * arrayString.length);

    let removed = arrayString.splice(randomNumber, 1);

    outputSrtring.push(removed[0]);
  }

  return outputSrtring.join("");
}

console.log(embaralha("vinicius"));
