/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  var s = strs
    .map((e) => {
      if (/^\d+$/.test(e)) {
        return parseInt(e);
      } else {
        return e.length;
      }
    })
    .reduce((a, c) => Math.max(a, c), 0);

  return s;
};
