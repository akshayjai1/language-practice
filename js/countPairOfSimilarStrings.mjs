/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  const repeatingStrings = words.map((e) => {
    var s = new Set(...e.split())
    return [...s].sort().join()
  })
  // const map = {};
  // let count = 0;
  // for(let s of repeatingStrings){
  //     if(map[s] === 1){
  //       count++;
  //     map[s]+=1;
  //     } else if (map[s]>1){
  //         map[s]+=1;
  //     } else {
  //         map[s] = 1;
  //     }
  // }
  // return count
  let count1 = 0
  const l = repeatingStrings.length
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (repeatingStrings[i] == repeatingStrings[j]) count1++
    }
  }
  return count1
}
