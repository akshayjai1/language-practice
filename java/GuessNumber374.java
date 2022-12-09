/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

public class GuessNumber374 extends GuessGame {
	public int guessNumber(int n) {
			int i = 1, j = n;
			while(i < j) {
					int mid = i + (j-i)/2;
					int guessValue = guess(mid);
					if(guessValue > 0) {
							i = mid + 1;
					} else {
							j = mid;
					}
			}
			return i;
	}
}

// note, that, we have to do (j - i) / 2, not (i+j)/2