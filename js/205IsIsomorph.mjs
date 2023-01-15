// https://leetcode.com/problems/isomorphic-strings/submissions/
// var s = 'add';
// var t = "egg";

var createStringCode1 = (s) => {
  let map = new Map()
  let id = 0
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], id)
      str += id + '.'
      id += 1
    } else {
      const key = map.get(s[i])
      str += key + '.'
    }
  }
  return str
}

var isIsomorph = (s, t) => {
  let i = createStringCode1(s)
  console.log('code for is', s, i)
  let j = createStringCode1(t)
  console.log('code for is', t, j)
  return i === j
}

// var s = 'bbbaaaba';
// var t = 'aaabbbba';
// var s = "abcdefghijklmnopqrstuvwxyzva";
// var t = "abcdefghijklmnopqrstuvwxyzck"
/* solution is keeping index in mind, if the index of both are same, they are isomorphic */
/* code for is abcdefghijklmnopqrstuvwxyzva 0.1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.21.0.
Script snippet #4:22 code for is abcdefghijklmnopqrstuvwxyzck 0.1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.2.10. */
console.log(isIsomorphic(s, t))
