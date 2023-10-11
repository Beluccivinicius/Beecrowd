// Read an integer value, which is the duration in seconds of a certain event in a
// factory, and inform it expressed in hours:minutes:seconds.

// Input
// The input file contains an integer N.

// Output
// Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

class Transform {
  constructor(segundos) {
    this.segundos = segundos;
  }
  transform() {
    const horas = Math.floor(this.segundos / 3600);

    const minutos = Math.floor((this.segundos % 3600) / 60);

    const segundos = Math.floor((this.segundos % 3600) % 60);

    console.log(horas + ":" + minutos + ":" + segundos);
  }
}

const menu = () => {
  const seconds = parseInt(lines[0]);
  const transform = new Transform(seconds);

  transform.transform();
};

menu();
