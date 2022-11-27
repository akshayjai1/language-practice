// https://www.youtube.com/watch?v=zsJ-J08Qgdk
/**
 * @param {string} s
 * @return {number}
 * https://www.youtube.com/watch?v=zsJ-J08Qgdk
 */
var calculate = function (s) {
  let r = 0; // stands for result;
  let c = 0; // stands for current;
  let p = 1; // stands for plus sign;
  let sa = s.split('');
  let st = []; // st stands for stack;
  for (let a of sa) {
    if (/\d/.test(a)) {
      c = 10 * c + parseInt(a);
    } else if (['+', '-'].includes(a)) {
      r += p * c;
      p = a == '-' ? -1 : 1;
      c = 0; // so that it is usable, next time we encounter digit
    } else if (a === '(') {
      st.push(r);
      st.push(p);
      (r = 0), (c = 0), (p = 1);
    } else if (a === ')') {
      r += p * c;
      r *= st.pop();
      r += st.pop();
      c = 0; // so that it is usable, next time we encounter digit
    }
  }
  return r + p * c;
};
