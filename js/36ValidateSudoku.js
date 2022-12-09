var s = [];
s[0] = [
  //true;
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

s[1] = [
  // false;
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const b = board;
  let ns = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var isValidNumberInBox = (map, e) => {
    if (ns.includes(e)) {
      if (map[e]) {
        return false;
      } else {
        map[e] = 1;
      }
    }
  };
  for (let i = 0; i < 9; i++) {
    let map = {};
    for (let j = 0; j < 9; j++) {
      let e = b[i][j];
      if (isValidNumberInBox(map, e) === false) {
        return false;
      }
    }
  }
  console.log('first check passed');
  for (let i = 0; i < 9; i++) {
    let map = {};
    for (let j = 0; j < 9; j++) {
      let e = b[j][i];
      if (isValidNumberInBox(map, e) === false) {
        return false;
      }
    }
  }
  console.log('second check passed');
  var a = 3;
  for (let m = 0; m < a; m++) {
    for (let k = 0; k < a; k++) {
      let n = a * m;
      let map = {};
      for (let i = n + 0; i < n + a; i++) {
        let s = a * k;
        for (let j = s + 0; j < s + a; j++) {
          // console.log(m,k,n,s,i,j);
          let e = b[i][j];
          if (isValidNumberInBox(map, e) === false) {
            return false;
          }
        }
      }
    }
  }
  console.log('third check passed');
  return true;
};
console.log('isValid', isValidSudoku(s[1]));
