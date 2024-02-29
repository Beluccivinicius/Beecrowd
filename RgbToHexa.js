function rgb(r, g, b) {
  const arrayNumber = [r, g, b];
  let hexadecimal = "";
  for (let i = 0; i < arrayNumber.length; i++) {
    let firstNumber = Math.floor(arrayNumber[i] / 16);
    let secondNumber = arrayNumber[i] % 16;

    if (firstNumber < 0) {
      firstNumber = "0";
      secondNumber = "0";
    }
    if (firstNumber > 255) {
      firstNumber = "F";
      secondNumber = "F";
    }

    firstNumber = firstNumber.toString(16).toUpperCase();
    secondNumber = secondNumber.toString(16).toUpperCase();

    hexadecimal += `${firstNumber}${secondNumber}`;
  }

  return hexadecimal;
}

console.log(rgb(148, 0, 211));
