/* 3 conditions
1. length should match
2. if a=>Dog, b cannot => Dog
3. use hashmap, to verify not constraint failure. */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const wa = s.split(' ')
  if (wa.length !== pattern.length) return false
  const m = new Map()
  const st = new Set()
  for (let i in pattern) {
    const k = m.get(pattern[i])
    if (k) {
      if (wa[i] !== k) return false
    } else {
      if (st.has(wa[i])) return false
      st.add(wa[i])
      m.set(pattern[i], wa[i])
    }
  }
  return true
}
