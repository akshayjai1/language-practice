/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const m = {}; // m is for storing map of losses
  for (let [w, l] of matches) {
    m[w] = m[w] ? m[w] : 0;
    m[l] = m[l] ? m[l] + 1 : 1;
  }
  const ans = [[], []];
  for (let p in m) {
    let noOfL = m[p];
    if (noOfL <= 1) {
      // only considering players having one or 0 loss.
      ans[noOfL].push(p);
    }
  }
  return ans;
};
