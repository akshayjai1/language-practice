/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
	if(x < 0) return false;
	let s = x + '';
	let i = 0,j=s.length - 1;
	while(i<j){
			if(s[i]!=s[j]){
					return false;
			}
			i++;j--;
	}
	return true;
 };
isPalindrome(121);
console.log('hi',isPalindrome(131))