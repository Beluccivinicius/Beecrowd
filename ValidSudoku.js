/** https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let compare = new Array(board.length);

  //verify collum
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[j][i] === compare[board[j][i]]) return false;

      if (board[j][i] != ".") {
        compare[board[j][i]] = board[j][i];
        continue;
      }
    }
    compare = [];
  }

  //   verify row
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (compare[board[i][j]] === board[i][j]) return false;

      if (board[i][j] != ".") {
        compare[board[i][j]] = board[i][j];
        continue;
      }
    }
    compare = [];
  }
  compare = [];

  //verify 3x3 grid
  for (let r = 0; r < 9; r = r + 3) {
    for (let c = 0; c < 9; c = c + 3) {
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          if (compare[board[l + r][k + c]] === board[l + r][k + c])
            return false;

          if (board[l + r][k + c] != ".") {
            compare[board[l + r][k + c]] = board[l + r][k + c];
            continue;
          }
        }
      }
      console.log(compare);
      compare = [];
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
