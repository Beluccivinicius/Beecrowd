// Read an integer value corresponding to a person's age (in days) and print it in years, 
// months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.

// Note: only to facilitate the calculation, consider the whole year with 365 days and 30 
// days every month. In the cases of test there will never be a situation that allows 12 
// months and some days, like 360, 363 or 364. This is just an exercise for the purpose of 
// testing simple mathematical reasoning.

// Input
// The input file contains 1 integer value.

// Output
// Print the output, like the following example.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let idadeDias = +lines
let [ano, mes, dia] = [365, 30, 1]
let anosVida = Math.floor(idadeDias / ano)
let mesVida = Math.floor((idadeDias - anosVida * ano) / mes)
let diaVida = Math.floor(idadeDias - anosVida * ano - mesVida * mes)
console.log(`${anosVida} ano(s)\n${mesVida} mes(es)\n${diaVida} dia(s)`)

