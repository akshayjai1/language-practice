public class MergeSort {

	public static void mergeSorts(int[] input){
		helper(input, 0, input.length - 1);
	}

	private static void helper(int [] input, int start, int end){
		if(start >= end){
			return;
		} else {
			int mid = start + (end - start) / 2;
			helper(input, start, mid);
			helper(input, mid + 1, end);
			for(int i: input){
        System.out.print(i + " ");
    	}
			System.out.println();
			merge(input, start, mid, end);
		}
	}

	private static void merge(int [] input, int start, int mid, int end){
		int n2 = end - mid;int n1 = mid - start + 1;
		int [] L = new int[n1];
		int [] R = new int[n2];
		for(int k = 0; k < n1; k++){
			L[k] = input[start + k];
		}
		for(int k = 0; k < n2; k++){
			R[k] = input[mid+1+k];
		}
		System.out.println("merge --- L -- R " + start + " " + mid + " " + end);
		pr(L);pr(R);
		System.out.println("--- L -- R");
		int i = 0, j =  0,count = start;
		while(i < n1 && j < n2){
			if(L[i] <= R[j]){
				input[count++] = L[i++];
			} else {
				input[count++] = R[j++];
			}
		}
        while(i < n1){
            input[count++] = L[i++];
        }
        while(j < n2){
            input[count++] = R[j++];
        }
	}

	public static void main(String [] args){
		System.out.println("hello");
		int[]a = {2,3,51,132,32,223,303,406,504};
    System.out.println("output = ");
    helper(a,0,a.length - 1);
    for(int i: a){
        System.out.print(i + " ");
    }
	}
	public static void pr(int[] ib){
		for(int i: ib){
        System.out.print(i + " ");
    }
		System.out.println();
	}
}
/*

import java.util.* ;
import java.io.*;
public class Solution {

    public static void pa2(int[][] a){
        System.out.println("----");
        for(int [] r: a){
            for(int c:r){
                System.out.print(" " + c);
            }
            System.out.println("");
        }

        System.out.println("----");
    }

	public static void main(String[] args){
        int [][] d = {{1,2,1},{2,3,4},{3,4,5},{5,6,7}};
        int[]a = {2,3,51,132,32,223,303,406,504};
        System.out.println("output = ");
        int [] b = helper(a,0,a.length - 1);
        for(int i: a){
            System.out.print(i + " ");
        }
        for(int i: b){
            System.out.print(i + " ");
        }
	}

    private static int[] helper(int [] input, int start, int end){
		if(start >= end){
			return input;
		} else {
			int mid = start + (end - start) / 2;
			int[] in1 = helper(input, start, mid);
			int[] in2 = helper(input, mid + 1, end);
			return merge(in1, in2);
		}
	}
    private static int[] merge(int [] input1,int [] input2){
		int [] out = new int[input1.length + input2.length];
		int i = 0, j = 0, count = 0;
        // System.out.println("merge input");
		while(i < input1.length && j < input2.length){
			if(input1[i] <= input2[j]){
				out[count++] = input1[i++];
			} else {
				out[count++] = input2[j++];
			}
		}
        while(i < input1.length){
            out[count++] = input1[i++];
        }
        while(j < input2.length){
            out[count++] = input2[j++];
        }
        return out;
	}
}




 */