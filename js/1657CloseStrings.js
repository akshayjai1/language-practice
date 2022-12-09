/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const getMap = (s) => {
    let m = {};
    for (let i of s) {
      m[i] = m[i] ? m[i] + 1 : 1;
    }
    return m;
  };
  const m1 = getMap(word1);
  const m2 = getMap(word2);
  console.log('m', m1, m2);

  for (let x in m1) {
    if (m1[x] !== m2[x]) {
      return false;
    }
  }
  return true;
};

// console.log('dfs', closeStrings('a', 'aa'));
console.log('l', closeStrings('cabbba', 'abbccc'));
