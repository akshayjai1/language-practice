import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// Write your code here
		Scanner s = new Scanner(System.in);
		boolean decreasingStart = false;
		boolean increasingStart = false;
		int n = s.nextInt();
		int [] dn = new int[n];
		int [] in = new int[n];
		int temp = s.nextInt();
		int [] se = new int[5];
		int index = 0;
		while(n-- > 1){
			int k = s.nextInt();
			// break condition;
			// if(index)
			if (index > 2){
				System.out.println(false);
				return;
			}
			if(k > temp){
				if (index >  0 && se[index - 1] == 1){
					continue;
				}
				se[index]=1;index++;
			} else if( k < temp){
				if (index >  0 && se[index - 1] == -1) {
					continue;
				}
				se[index] = -1; index++;
			} else {
				System.out.println(false);
				return;
			}
			temp = k;
		}
		if(index  == 1){
				System.out.println(true);
				return;
			} else if (index == 2){
				if(se[0] == -1){
					System.out.println(true);
					return;
				} else {
					System.out.println(false);
					return;
				}
			} else {
				System.out.println(false);
					return;
			}

	}
}


// sequence should be first decreasing then then increasing, strictly