var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const animais = {
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      onivoro: "pomba",
    },
    mamifero: {
      onivoro: "homem",
      herbivoro: "vaca",
    },
  },
  invertebrado: {
    inseto: {
      hematofago: "pulga",
      herbivoro: "lagarta",
    },
    anelideo: {
      hematofago: "sanguessuga",
      onivoro: "minhoca",
    },
  },
};
const [type1, type2, type3] = lines;

console.log(animais[type1][type2][type3]);
