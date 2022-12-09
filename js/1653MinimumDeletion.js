var minimumDeletions = function (s) {
  let n = s.length,
    atot = 0;
  for (let i = 0; i < n; i++) if (s[i] === 'a') atot++;
  let acurr = 0,
    best = atot;
  for (let i = 0; best && i < n; i++) {
    if (s[i] === 'a') acurr++;
    best = Math.min(best, i + 1 + atot - 2 * acurr);
  }
  return best;
};
// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/discuss/2655985/JAVA-or-STACK-%2B-LOGIC-(Ask-in-My-Interview-)
// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/discuss/2582873/Java-Solutions-oror-2-Solutions-oror-Easy-to-understand
// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/discuss/2754503/Java-ororFaster-than-99-oror-No-stack-No-Dp-used
https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/discuss/935701/DP-solution-beats-100-with-explanation