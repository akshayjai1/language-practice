/*
first of all calculate and put difference in dx.
there are cases.
if low is odd = 3, you already have one odd.
adding 1, you come to 4, no addition in odd
adding 2, you come to 5, 1 addition in odd
adding 3, you come to 6, no further addition in odd
adding 4, you come to 7, 1 more addition in odd.
basically if low is odd, addition in odd = math.floor(dx/2)
therefore total odd = 1 + math.floor(dx/2)

if low is even = 4, , no odd, by default;
adding 1, you come to 5, 1 odd
adding 2, you come to 6, no further addition in odd
adding 3, you come to 7, 1 more addition in odd.
adding 4, you come to 8, no more addition in odd.
basically if low is even, total odd = math.floor(dx+1/2)

 */
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let dx = high - low
  if (low % 2 === 0) {
    return Math.floor((dx + 1) / 2)
  } else {
    return 1 + Math.floor(dx / 2)
  }
}
