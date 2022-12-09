/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
	let m = new Map();
	for(let x of s){
		m.set(x,(m.get(x) ?? 0)+1);
	}
	return [...m].sort((a,b)=>b[1]-a[1]).reduce((acc,[char,freq])=>acc+char.repeat(freq),'')

};