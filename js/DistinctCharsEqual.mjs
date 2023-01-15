/* Approach 1:
we want to know if it is possible to swap a character and cause unique characters in both string to equal.
that is possible if d1-d2 < 3, if it is zero, we return true;
if d1 - d2 == 1, we check for every alphabet, if it is possible to keep d1 constant and increment d2, or decrement d1 and keep d2 constant.
if d1 - d2 == 2, we check for every alphabet, if it is possible to decrease d1 and increment d2 by 1

*/

/* we want distinct characters count to equal in both the strings, if it is already equal return true.
if it is not equal, then we have to swap a character and check if the count of distinct characters has become equal now.
we can iterate from a - z, and common chars of a, we can put in cc, unique of w1, and w2.
now characters which are common and have count of 1, i think are not to be considered, they will not affect the result.

we now have common characters where cout is greater than 1
also we have unique characters of word1 and word2

a character which is common in both string and has count greater than 1 can be swaped to increase the unique character count in other string.
 */
function isConstant(i, o, w) {
  if (w[o] === undefined) return false

  if (i == o) return w[i] > 0 && w[o] > 0
  if (w[o] == 1) return w[i] === 0
  return w[i] > 0 && w[o] > 0
}
function isIncreased(i, o, w) {
  if (w[o] === undefined) return false

  if (i == o) return false
  if (w[o] == 1) return false
  return w[i] === 0
}
function isDecreased(i, o, w) {
  if (w[o] === undefined) return false

  if (i == o) return false
  if (w[o] === 1) return w[i] > 0
  return false
}
function isItPossible(w1, w2) {
  let m1 = {},
    m2 = {}
  for (let i of w1) {
    m1[i] = (m1[i] ?? 0) + 1
  }
  for (let i of w2) {
    m2[i] = (m2[i] ?? 0) + 1
  }
  let d1 = Object.keys(m1).length
  let d2 = Object.keys(m2).length
  console.log({ d1, d2 })
  if (Math.abs(d1 - d2) > 2) return false
  let x1 = m1,
    x2 = m2,
    xd1 = d1,
    xd2 = d2
  if (d2 > d1) {
    ;(x1 = m2), (x2 = m1), (xd1 = d2), (xd2 = d1)
  }
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  if (xd1 - xd2 === 0) {
    for (let c1 of abc) {
      for (let c2 of abc) {
        if (isDecreased(c2, c1, x1) && isDecreased(c1, c2, x2)) {
          console.log('ab', c1, c2, x1, x2)
          return true
        }
        if (isIncreased(c2, c1, x1) && isIncreased(c1, c2, x2)) {
          console.log('ab0', c1, c2, x1, x2)
          return true
        }
        if (isConstant(c2, c1, x1) && isConstant(c1, c2, x2)) {
          console.log('ab1', c1, c2, x1, x2)
          return true
        }
      }
    }
  }
  if (xd1 - xd2 === 1) {
    for (let c1 of abc) {
      for (let c2 of abc) {
        if (isConstant(c1, c2, x1) && isIncreased(c2, c1, x2)) {
          console.log(1)
          return true
        }
        if (isConstant(c1, c2, x2) && isDecreased(c2, c1, x1)) {
          console.log(2, c1, c2)
          return true
        }
      }
    }
  }
  if (xd1 - xd2 === 2) {
    for (let c1 of abc) {
      for (let c2 of abc) {
        if (isDecreased(c2, c1, x1) && isIncreased(c2, c1, x2)) {
          console.log(3)
          return true
        }
      }
    }
  }
  return false
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible0 = function (word1, word2) {
  let s1 = new Set(word1.split(''))
  let s2 = new Set(word2.split(''))
  const matchCharSet = new Set()
  const uniqueS1 = new Set()
  for (let s of s1) {
    if (s2.has(s)) {
      matchCharSet.add(s)
    } else {
      uniqueS1.add(s)
    }
  }
  const unionSet = new Set([...s1, ...s2])
  const uniqueS2N = unionSet.size - uniqueS1.size
  if (matchCharSet.size == 0 && s1.size == s2.size) {
    return true
  } else if (uniqueS2N - uniqueS1.size == 1) {
    return true
  }
  return false
}

//
/* create a map of char counts, and try replacing each char from one string into another, if the count of distinct chars become equal, then we get true as answer */
var isItPossible3 = function (word1, word2) {
  let m1 = {},
    m2 = {}
  for (let e of word1) {
    m1[e] = (m1[e] ?? 0) + 1
  }
  for (let e of word2) {
    m2[e] = (m2[e] ?? 0) + 1
  }

  for (let c1 of Object.keys(m1)) {
    if (m1[c1] <= 0) continue
    for (let c2 of Object.keys(m2)) {
      if (m2[c2] <= 0) continue
      const [d1, d2] = [{ ...m1 }, { ...m2 }]
      if (swap(c1, c2, d1, d2)) {
        return true
      }
    }
  }
  return false
}

/* swap c1 of d1 and c2 of d2  and return true if number of distinct char becomes equal*/
function swap(c1, c2, d1, d2) {
  let n1 = Object.keys(d1).length
  let n2 = Object.keys(d2).length
  if (d1[c2]) {
    d1[c2]++
  } else {
    d1[c2] = 1
    n1++
  }
  // remove c2 from d2
  d2[c2]--
  if (d2[c2] == 0) n2--

  // add c1 to d2
  if (d2[c1]) {
    d2[c1]++
  } else {
    d2[c1] = 1
    n2++
  }
  // remove c1 from d1
  d1[c1]--
  if (d1[c1] == 0) n1--
  if (n1 == n2) return true
  else return false
}

console.log(' - --')
// console.log('is it possible', isItPossible('a', 'bb'))
// console.log('is it possible', isItPossible('ac', 'b'))
console.log('is it possible', isItPossible3('aa', 'bcd'))
// console.log('is it possible', isItPossible3('abcde', 'fghij'))
console.log(' - --')
