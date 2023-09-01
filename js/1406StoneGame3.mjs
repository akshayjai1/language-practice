/*
problem is like this: there are two players, who can choose the 1-3 stones from the row, and increase their score, one with higher score wins.
player one always starts to play
*/
function stoneGameIII(stones) {
  let n = stones.length
  let a = Array(n).fill(-Infinity)
  for (let i = n - 1; i >= 0; i--) {
    let p = 0
    for (let j = 1; j < 4; j++) {
      if (i + j > n) break
      p += stones[i + j - 1]
      console.log('value of subtraction = ', a[i + j] || 0)
      a[i] = Math.max(a[i], p - (a[i + j] || 0))
      console.log({ i, p, a, j })
    }
  }
  console.log('a is', a)
  console.log(a[0], ' value for dp[0]')
}
let b = [2, 4, -7, -3, 1, 2]
console.log(stoneGameIII(b))
/*
solution approach.
here alice and bob has to make a decision to choose either 1, 2, 3 stone, and they want to make a choice which is more optimal for them,
thus it is difficult to decide up front, therefore, we have to calculate it backwards, using backtracking, since at the last moment, we
have the base case, which is sure to explain what is the better decision
*/
