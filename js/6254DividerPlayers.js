var dividePlayers = function (skill) {
  const sa = skill.sort((a, b) => a - b);
  const sumOfFirstAndLast = sa[0] + sa[sa.length - 1];
  let ans = 0;
  for (let i = 0; i < sa.length / 2; i++) {
    if (sa[i] + sa[sa.length - 1 - i] !== sumOfFirstAndLast) {
      return -1;
    }
    ans += sa[i] * sa[sa.length - 1 - i];
  }
  return ans;
};
const m = [];
m.push([3, 2, 5, 1, 3, 4]);
m.push([3, 4]);
for (let x of m) {
  console.log('dividing the players', dividePlayers(x));
}
