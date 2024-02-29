//https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {
  let string = text.split("");
  for (let j = 0; j < n; j++) {
    let odd = [];
    let even = [];
    for (let i = 0; i < text.length; i++) {
      if (i % 2 != 0) {
        odd.push(string[i]);
      } else {
        even.push(string[i]);
      }
    }
    string = odd.concat(even);
  }

  return string.join("");
}

// function decrypt(encryptedText, n) {
//   let string = encryptedText.split("");
//   for (let j = 0; j < n; j++) {
//     let dividesString = Math.floor(encryptedText.length / 2 + 1);
//     let left = [];
//     for (let i = 0, k = 0; i < dividesString; i++) {
//       if (i % 2 == 0) {
//         left.push(string[dividesString]);
//         dividesString++;
//       } else {
//         left.push(string[k]);
//         k++;
//       }
//     }
//     string = left;
//   }

function decrypt(encryptedText, n) {
  let string = encryptedText.split("");
  for (let j = 0; j < n; j++) {
    let dividesString = Math.floor(encryptedText.length / 2);

    let left = [];
    for (let i = 0, k = 0; i < dividesString; i++) {
      console.log(string[string.length - 1]);
      if (i % 2 == 0) {
        left.push(string[dividesString]);
        dividesString++;
      } else {
        left.push(string[k]);
        k++;
      }
    }
    string = left;
  }

  return string.join("");
}

console.log(decrypt("hsi  etTi sats!", 1));
