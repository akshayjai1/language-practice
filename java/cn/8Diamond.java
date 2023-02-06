import java.util.Scanner;
public class Solution {

    public static void main(String[] args) {
        // Write your code here
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int top = (n + 1) / 2;
        int t1 = top - 1; int t2 = t1;
        boolean direct = true;
        for (int i = 0 ; i < n; i++){
         for(int j = 0; j < n; j++){
                if(j >= t1 && j <= t2){
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            if (direct && t1 > 0) {
                    t1--;
                    t2++;
                } else {
                    direct = false;
                    t1++;
                    t2--;
                }
            System.out.println("");

            }
    }
}