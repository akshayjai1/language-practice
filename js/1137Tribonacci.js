/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let cache = { 0: 0, 1: 1, 2: 1 };
  const getTri = (num, map) => {
    if (map[num] !== undefined) {
      return map[num];
    } else {
      map[num] =
        getTri(num - 1, map) + getTri(num - 2, map) + getTri(num - 3, map);
      return map[num];
    }
  };
  return getTri(n, cache);
};
