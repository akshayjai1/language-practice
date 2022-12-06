/**
* @param {number[]} arr
* @return {boolean}
*/
var uniqueOccurrences = function(arr) {
	 let s = new Set();
	 let m = {};
	 for(let x of arr){
		 m[x] = m[x] ? m[x]+1:1;
	 }
	console.log('map is ', m);
	 for(let x of Object.values(m)){
		 if(s.has(x)){
			 return false
		 }
		 s.add(x)
	 }
 return true;
};
console.log('value', uniqueOccurrences([1, 2, 2, 1, 1, 3]));