var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const A = lines[0];
const B = lines[1];
const X = Number(A) + Number(B);
console.log(`X = ${X}`);

const arr = [0, 1, 2, 3, 4, 9, 6];

console.log(arr[5]);

//Jogo FIZZ BUSS

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FIZZBUZZ`);
    continue;
  }

  i % 3 === 0 && console.log(`FIZZ`);
  i % 5 === 0 && console.log(`BUZZ`);

  console.log(i);
}

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

const youngPeople = people
  .filter((n) => n.age < 25)
  .map((n) => {
    return { name: `${n.firstName} ${n.lastName}`, email: n.email };
  });

console.log(youngPeople);



const words = ["coder", "programmer", "developer"];

const capitalizedWords = words.map((n) => {
  return n.replace(n[0], n[0].toUpperCase());
});

console.log(capitalizedWords);
