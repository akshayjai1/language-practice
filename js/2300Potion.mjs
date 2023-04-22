/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => b - a);
  let pairs = [];
  let count;
  for (let s of spells) {
    count = bs(s);
    pairs.push(count);
  }
  return pairs;

  function bs(spell) {
    let l = 0,
      h = potions.length - 1,
      m;
    while (l < h) {
      m = l + Math.floor((h - l) / 2);
      if (potions[m] * spell >= success) {
        l = m + 1;
      } else {
        h = m;
      }
    }
    return l;
  }
};
console.log('----\n');
console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
