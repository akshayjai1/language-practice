import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int [] aa = new int[n];
		for(int i = 0; i < n; i++){
			aa[i] = 2*i + 1;
		}
		for(int i = 0; i < n; i++){
            for(int j = i; j < i + n; j++){
				System.out.print(aa[j%n]);
			}
			System.out.println();
		}
	}
}
