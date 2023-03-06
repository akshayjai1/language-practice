/*
Question:
You are given two arrays of integers. Let's call the first array A and the second array B. A finds the number of elements in array B that are smaller than or equal to that element for every array element.


we iterate through array A, and then find all elements smaller than ai and put it in a new array.
time complexity for this solution in m*n, m = a elements, n = b elements
 if to think about optimization.
 we can sort array b.
 now for each element in array a, find if that element exists in array b, using binary search.
 if the number exists, check what is index of number in sorted array b. the index + 1 is the number items we need.
 if the number does not exist, check the index at which we should insert the number.
 */
import java.util.*;
class BinarySearch{
	public static int getPosition(int [] a, int b){
        int i = 0, j = a.length - 1;
        while(i < j){
            int k = i + (j - i)/ 2;
            if(a[k] < b){
                i = k+1;
            } else {
                j = k;
            }
        }
        return a[i] <= b ? i + 1 : i;
    }
	public static void pa(int[] a){
        System.out.println("----");
        for(int c:a){
            System.out.print(" " + c);
        }
        System.out.println("\n----");
    }
	public static void main(String[] args){
        int a[] = {2,3,0};
        int b[] = {5,1};
        String ass = "abc   ";
        String bs = "abcda";
        System.out.println("output of compare is "+ ass.compareTo(bs));
        int cd[]={1,25,3,4,45,7,8,243,21,26,32,23,323,5,1100,100};
        /**
        test cases, 1: search for 10 -- working
        2: search for 0 or -3 -- working
        3: search for 100 or -3 -- working
        */
        Arrays.sort(b);
        Arrays.sort(cd);
        pa(cd);
        int f = 100;
        int c = getPosition(cd,f);
        int ii [] = new int[a.length];
        System.out.println("Position of " + f + " is " + c);
        pa(b);
        for(int i =0; i < a.length;i++){
            int k = getPosition(b,a[i]);
            System.out.println("position of  a[i] = " + a[i] + " is k = " + k);
            ii[i] = k;
        }
        pa(ii);

	}
}

