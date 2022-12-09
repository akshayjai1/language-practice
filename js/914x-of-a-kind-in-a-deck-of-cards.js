/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  var map = {};
  const gcd = (a, b) => {
    let [m, n] = a > b ? [a, b] : [b, a];
    while (m % n != 0) {
      let t = m % n;
      m = n;
      n = t;
    }
    return n;
  };

  deck.forEach((e, i) => {
    if (map[e]) {
      map[e].push(e);
    } else {
      map[e] = [e];
    }
  });
  var v = Object.values(map);
  var ls = v.map((e) => e.length);

  var g = ls.reduce((a, c) => gcd(a, c));
  return g > 1;
};
// [1,2,3,4,4,3,2,1]
// hasGroupsSizeX([1,1,2,2,2,2])
// hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])
// hasGroupsSizeX([1,1,1,2,2,2,3,3])
