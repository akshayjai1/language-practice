import java.util.*;
// "static void main" must be defined in a public class.
public class Main {
     public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int l = 2*n + 1;
        int mm=2;
        for (int i = 0; i < l; i++) {
            int k = 2*i + 1;
            if(i > n){
                k = (i - mm) *2 + 1;
                mm+=2;
            }
            int m = 2;
            for (int j = 0; j < k; j++) {
                if(j == 0 || j == k -1){
                    System.out.print("*");
                } else {
                    int p = j;
                    int ll = (k - 1)/2;
                    if(j > ll){
                        p = j - m;
                        m+=2;
                    }
                    System.out.print(p);
                }

            }
            System.out.println("");
        }
    }
}