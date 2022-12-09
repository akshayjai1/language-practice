//User function Template for javascript

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
class Solution {
  josephus(n, k) {
    let am = [...Array(n)].map((e, i) => i + 1);
    // code here
    let i = 0;
    while (am.length > 1) {
      i = (i + k - 1) % am.length;
      am.splice(i, 1);
    }
    return am[0];
  }
}

/* recursive solution */
class Solution {
  josephus(n, k) {
    // code here
    function ab(k, a, i) {
      if (a.length == 1) return a[0];
      let m = (i + k - 1) % a.length;
      if (a.length === 2) {
        if (m === 0) {
          return a[1];
        } else {
          return a[0];
        }
      } else {
        a.splice(m, 1);
        return ab(k, [...a], m);
      }
    }
    let o = [...Array(n)].map((g, h) => h + 1);
    return ab(k, o, 0);
  }
}
