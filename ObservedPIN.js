// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

// const ObjLindo = {
//   1: [1, 2, 4],
//   2: [2, 1, 5, 3],
//   3: [3, 2, 6],
//   4: [4, 5, 7, 1],
//   5: [5, 2, 4, 6, 8],
//   6: [6, 3, 5, 9],
//   7: [7, 4, 8],
//   8: [8, 0, 5, 7, 9],
//   9: [9, 6, 8],
//   0: [0, 8],
// };

// function getPINs(observed) {
//   const [one, two, three, four, five, six, seven, eight] = observed;

//   let sequence = [];
//   for (let a = 0; a < ObjLindo[one].length; a++) {
//     if (two == undefined) {
//       sequence.push(`${ObjLindo[one][a]}`);
//       continue;
//     }

//     for (let b = 0; b < ObjLindo[two].length; b++) {
//       if (three == undefined) {
//         sequence.push(`${ObjLindo[one][a]}${ObjLindo[two][b]}`);
//         continue;
//       }

//       for (let c = 0; c < ObjLindo[three].length; c++) {
//         if (four == undefined) {
//           sequence.push(
//             `${ObjLindo[one][a]}${ObjLindo[two][b]}${ObjLindo[three][c]}`
//           );
//           continue;
//         }
//         for (let d = 0; d < ObjLindo[four].length; d++) {
//           if (five == undefined) {
//             sequence.push(
//               `${ObjLindo[one][a]}${ObjLindo[two][b]}${ObjLindo[three][c]}${ObjLindo[four][d]}`
//             );
//             continue;
//           }
//           for (let e = 0; e < ObjLindo[five].length; e++) {
//             if (six == undefined) {
//               sequence.push(
//                 `${ObjLindo[one][a]}${ObjLindo[two][b]}${ObjLindo[three][c]}${ObjLindo[four][d]}${ObjLindo[five][e]}`
//               );
//               continue;
//             }
//             for (let f = 0; f < ObjLindo[six].length; f++) {
//               if (seven == undefined) {
//                 sequence.push(
//                   `${ObjLindo[one][a]}${ObjLindo[two][b]}${ObjLindo[three][c]}${ObjLindo[four][d]}${ObjLindo[five][e]}${ObjLindo[six][f]}`
//                 );
//                 continue;
//               }
//               for (let g = 0; g < ObjLindo[seven].length; g++) {
//                 if (eight == undefined) {
//                   sequence.push(
//                     `${ObjLindo[one][a]}${ObjLindo[two][b]}${ObjLindo[three][c]}${ObjLindo[four][d]}${ObjLindo[five][e]}${ObjLindo[six][f]}${ObjLindo[seven][g]}`
//                   );
//                   continue;
//                 }
//                 for (let h = 0; h < ObjLindo[eight].length; h++) {
//                   sequence.push(
//                     `${ObjLindo[one][a]}${ObjLindo[two][b]}${ObjLindo[three][c]}${ObjLindo[four][d]}${ObjLindo[five][e]}${ObjLindo[six][f]}${ObjLindo[seven][g]}${ObjLindo[eight][h]}`
//                   );
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   return sequence;
// }

// console.log(getPINs("00000000"));

function getPINs(observed) {
  return observed
    .split("")
    .map(
      (t) =>
        ({
          0: ["0", "8"],
          1: ["1", "2", "4"],
          2: ["1", "2", "3", "5"],
          3: ["2", "3", "6"],
          4: ["1", "4", "5", "7"],
          5: ["2", "4", "5", "6", "8"],
          6: ["3", "5", "6", "9"],
          7: ["4", "7", "8"],
          8: ["5", "7", "8", "9", "0"],
          9: ["6", "8", "9"],
        }[t])
    )
    .reduce((pre, cur) =>
      [].concat.apply(
        [],
        pre.map((t) => cur.map((g) => t + g))
      )
    );
}
console.log(getPINs("33"));
