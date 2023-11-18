var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const media = (arrayNumber) => {
  let notes = [];

  const calcularMedia = (media) => {
    return ((media[0] + media[1]) / 2).toFixed(2);
  };

  for (let i = 0; i < arrayNumber.length; i++) {
    if (notes.length > 2) {
      console.log("novo calculo (1-sim 2-nao)");

      if (arrayNumber[i] === 1) {
        notes.splice(0, notes.length);
      } else if (notes[i] == 2) {
        return;
      }
    }
    if (arrayNumber[i] >= 0 && arrayNumber[i] <= 10) {
      notes.push(arrayNumber[i]);

      if (notes.length == 2) {
        console.log("media = " + calcularMedia(notes));
      }
    } else console.log("nota invalida");
  }
};

const menu = (arrayString) => {
  const arrayNumber = arrayString.map((n) => +n);
  media(arrayNumber);
};

menu(lines);
