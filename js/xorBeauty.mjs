function xorBeauty(n) {
  let l = n.length
  let rs = []
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      for (let k = 0; k < l; k++) {
        rs.push((n[i] | n[j]) & n[k])
      }
    }
  }
  console.log('ar is', rs)
  let r = rs[0]
  for (let m = 1; m < rs.length; m++) {
    r = r ^ rs[m]
  }
  return r
}

var c = xorBeauty([1, 4])
console.log(c)
