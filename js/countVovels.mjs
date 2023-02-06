// weekly contest 331
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  // return queries.map(([ql,qr])=>{
  //     let r = 0;
  //     for(let i = ql; i<=qr;i++){
  //         if(i >= words.length) break;
  //         let w = words[i];
  //         let start = w[0];
  //         let end = w[w.length - 1];
  //         if(vowels.includes(start) && vowels.includes(end) ){
  //             r+=1;
  //         }
  //     }
  //     return r;
  // });
  let sa = []
  words.map((w, i) => {
    let s = 0
    let start = w[0]
    let end = w[w.length - 1]
    if (vowels.includes(start) && vowels.includes(end)) {
      s += 1
    }
    if (i == 0) {
      sa[i] = s
    } else {
      sa[i] = sa[i - 1] + s
    }
  })
  return queries.map(([ql, qr]) => {
    let r = 0
    if (ql === 0) return sa[qr]
    else return sa[qr] - sa[ql - 1]
  })
}
