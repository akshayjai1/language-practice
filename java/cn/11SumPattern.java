import java.util.*;
public class Main {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		if(n==0) return;
		for(int i = 1; i <= n; i++){
			int sum = 1;
			System.out.print(1);
			for(int j = 2; j <= i; j++){
				sum+=j;
				System.out.print("+"+j);
			}
			System.out.println("="+sum);
		}
	}
}
