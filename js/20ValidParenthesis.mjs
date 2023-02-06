// 3 concepts
/* if ending bracket comes, it must following its corresponding opening brackend
2. increment count with opening bracket, decrement with closing, if at any point, count becomes negative, return false
3. finally,if any of the associated 3 counts is not zero return false */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let m = new Map()
  m.set('(', 0)
  m.set('{', 0)
  m.set('[', 0)
  m.set(')', '(')
  m.set('}', '{')
  m.set(']', '[')
  let sa = s.split('')
  let st = []
  for (let i of sa) {
    switch (i) {
      case '[':
      case '{':
      case '(':
        st.push(i)
        m.set(i, m.get(i) + 1)
        break
      case ']':
      case ')':
      case '}':
        let c = m.get(i)
        let last = st.pop()
        if (last != c) return false
        let previousCount = m.get(c)
        if (previousCount < 1) return false
        else {
          m.set(c, previousCount - 1)
        }
    }
  }
  let i = ['[', '{', '(']
  for (let k of i) {
    if (m.get(k) !== 0) return false
  }
  return true
}
// class Solution:
//     def isValid(self, s: str) -> bool:
//         while '()' in s or '[]'in s or '{}' in s:
//             s = s.replace('()','').replace('[]','').replace('{}','')
//         return False if len(s) !=0 else True
