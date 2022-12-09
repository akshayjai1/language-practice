/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vm = 'aeiouAEIOU';
  let l = 0,r = 0;
  for(let i = 0,j = s.length - 1; i< s.length/2 ;i++,j--){
    if(vm.includes(s[i])){
      l++
    }
    if(vm.includes[s[j]]){
      r++;
    }
  }
  return l === r;
};
console.log('test', halvesAreAlike('book'));