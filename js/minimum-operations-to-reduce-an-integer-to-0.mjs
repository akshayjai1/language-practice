// 6365
/**
 * @param {number} n
 * @return {number}
 *
 for 1, we subtract 1 ==> 0 step = 1
 for 2, we subtract 2 ==> 0 step = 1
 for 3, we subtract 2,1 =>0     step = 2,
        or add 1 and subtract 4 step = 2
 for 4, we subtract 4 =>        step 1
 for 5, subtract 1,4 => step = 2, or add +1,+2,-8 (3)
 for 6, -2-4 =(2) or (+2-8) = (2)
 for 7, (+1-8)=(2) or (-1-2-4)=(3)
 for 8, (-8)=[1]
 for 9, (-1-8)=[2] or(+1+2+4-16)=[4]
 for 10,(-2-8)=[2] or(+2+4-16)=[3]
 for 11,(-1-2-8)=[3] or(+1+4-16)=[3]
 for 12,(-4-8)=[2] or(+4-16)=[2]
 for 13,(-1-4-8)=[3] or(+1+2-16)=[3]

 approach


 */
 var minOperations = function(n) {
		
 };