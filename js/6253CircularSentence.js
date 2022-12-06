var isCircularSentence = function (sentence) {
  if (sentence[0] !== sentence[sentence.length - 1]) return false;
  const sa = sentence.split(' ');
  if (sa.length === 1) return true;
  for (let i = 0; i < sa.length - 1; i++) {
    const st = sa[i]; // for string;
    const sl = st.length; // for string length
    if (sa[i + 1][0] !== st[sl - 1]) {
      return false;
    }
  }
  return true;
};
const s = ['HahaHah', 'leetcode exercises sound delightful','eetcode','Il likel LeetcodeI'];
for (let x of s) {
  console.log(x, ' is circular sentence ', isCircularSentence(x));
}
