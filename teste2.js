const random = () => {
  let random = parseInt(Math.random() * 100000);
  console.log(random);
  return random;
};

const cache = {
  expirar: function () {
    setTimeout(() => {
      this.codigoVerificacao = "expirado";
    }, 60000);
  },
};
let numero = random();
let numero4 = random();
let numero3 = random();
let numero2 = random();

console.log((cache[numero] = numero));
console.log((cache[numero2] = numero));
console.log((cache[numero3] = numero));
console.log((cache[numero4] = numero));

console.log(cache);
