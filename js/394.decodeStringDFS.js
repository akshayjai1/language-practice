function isNum(c) {
  return /\d/.test(c);
}
function isAlpha(c) {
  return /[a-z]/i.test(c);
}
var decodeString = function (s) {
  const m = new Map();
  const q = [];
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    if (c === '[') {
      q.push(i);
    } else if (c === ']') {
      m.set(q.pop(), i);
    }
  }

  const dfs = (start, end) => {
    let ans = '';
    let i = start;
    while (i < end) {
      if (m.has(i)) {
        const subans = dfs(i + 1, m.get(i));
        let pre = i - 1;
        while (isNum(s[pre])) {
          --pre;
        }
        let num = parseInt(s.slice(pre + 1, i));
        while (num-- > 0) {
          ans += subans;
        }
        i = m.get(i);
      } else if (isAlpha(s[i])) {
        ans += s[i];
      }
      ++i;
    }
    return ans;
  };

  return dfs(0, s.length);
};
console.log(decodeString('3[a]'));
console.log(decodeString('3[a2[c]]'));

