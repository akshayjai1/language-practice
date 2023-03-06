/* You have been given two sorted arrays/lists(ARR1 and ARR2) of size N and M respectively, merge them into a third array/list such that the third array is also sorted. */
public class Solution {

    public static int[] merge(int arr1[], int arr2[]) {
    	int i=0,j=0;
        int l1 = arr1.length,l2 = arr2.length;
        int l3 = l1 + l2;
        int [] r = new int[l3];
        int k = 0;
        while (k < l3){
            if(i>=l1){
                r[k] = arr2[j];
                j++;
                // continue;
            } else if( j >=l2){
                r[k] = arr1[i];
                i++;
            } else if(arr1[i] < arr2[j]){
                r[k] = arr1[i];
                i++;
            } else {
                r[k] = arr2[j];
                j++;
            }
            k++;
        }
        return r;
    }

}