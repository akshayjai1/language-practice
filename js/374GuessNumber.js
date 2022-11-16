/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
	let i = 1, j = n;
	while( i < j ){
			// mid is the number we are guessing and asking if it is equal or greater or lesser than number picked by computer
			let mid = Math.floor((i + j)/2);
			const guessValue = guess(mid);
			if(guessValue === 0){
					return mid;
			} else if (guessValue > 0){
					i = mid + 1;
			} else {
					j = mid - 1;
			}
	}
	return i;
 };

/**
 *
 * we can remove the first guessValue === 0, by not decreasing j, when there are two options
 * var guessNumber = function(n) {
    let i = 1, j = n;
    while( i < j ){
        // mid is the number we are guessing and asking if it is equal or greater or lesser than number picked by computer
        let mid = Math.floor((i + j)/2);
        const guessValue = guess(mid);
        if (guessValue > 0){
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    return i;
};
 */