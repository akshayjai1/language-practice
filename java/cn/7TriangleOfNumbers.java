import java.util.*;

public class Solution {

	public static void main(String[] args) {

		/*
		 * Your class should be named Solution.
		 * Read input as specified in the question.
		 * Print output as specified in the question.
		 */
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int k = 1;
		for (int i = n; i > 0; i--) {
			int l = 0;
			for (int j = 0; j < n; j++) {
				if (j < i - 1) {
					System.out.print(" ");
				} else {
					l = k + j - i + 1;
					System.out.print(k + j - i + 1);
				}
			}
			k++;
			for (int j = 0; j < n - 1; j++) {
				if (j < n - i) {
					System.out.print(--l);
				} else {
					System.out.print(' ');
				}
			}
			System.out.println("");
		}

	}

}
