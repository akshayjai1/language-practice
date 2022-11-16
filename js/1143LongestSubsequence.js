// https://leetcode.com/problems/longest-common-subsequence/discuss/920170/js-solution
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  var o = [...Array(text1.length + 1)].map((_) =>
    Array(text2.length + 1).fill(-1),
  );
  var common = (a, b, i, j) => {
    if (i === 0 || j === 0) return 0;
    if (o[i][j] === -1) {
      let r = 0;
      if (a[i - 1] === b[j - 1]) {
        r = 1 + common(a, b, i - 1, j - 1);
      } else {
        r = Math.max(common(a, b, i - 1, j), common(a, b, i, j - 1));
      }
      o[i][j] = r;
      return r;
    } else {
      return o[i][j];
    }
  };
  return common(text1, text2, text1.length, text2.length);
};
