/**
 * @param {string} s
 * @return {string}
 */
function isNum(c) {
  return /\d/.test(c);
}
var decodeString = function (s) {
  let weights = [],
    strings = [];
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (isNum(s[i])) {
      let n = s[i];
      while (isNum(s[i + 1])) {
        n += s[i + 1];
        i++;
      }
      weights.push(parseInt(n));
      // console.log('weights', weights);
    } else if (s[i] === '[') {
      strings.push(str);
      // console.log('strings', strings);
      str = '';
    } else if (s[i] === ']') {
      const count = weights.pop();
      let ss = strings.pop();
      // console.log('ss', ss, typeof ss);
      for (let ik = 0; ik < count; ik++) {
        ss += str;
      }
      str = ss;
    } else {
      str += s[i];
    }
  }
  return str;
};
console.log(decodeString('3[a]'));
console.log(decodeString('3[a2[c]]'));
