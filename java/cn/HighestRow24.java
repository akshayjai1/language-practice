// For a given two-dimensional integer array/list of size (N x M), you need to find out which row or column has the largest sum(sum of all the elements in a row/column) amongst all the rows and columns.


public class HighestRow24 {
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
        int [][] d = {{15,2,3},{2,3,4},{3,4,5},{5,6,7}};
        pa2(d);
        System.out.println("output = ");
        findLI(d);
        findLargest(d);
	}
	public static void findLargest(int mat[][]){
		//Your code goes here
		int r = mat.length;
		if(r == 0){
			System.out.println("row 0 " + Integer.MIN_VALUE );
			return;
		}
		int c = mat[0].length;
		int [] rs = new int[r];
		int [] cs = new int[c];
		int ri = 0,ci = 0,rm=Integer.MIN_VALUE,cm=Integer.MIN_VALUE;
		for(int i = 0; i < r; i++){
			for(int j = 0 ;j < c; j++){
				rs[i]+=mat[i][j];
				cs[j]+=mat[i][j];
				if(i	 == r - 1){
					if(cs[j] > cm){
						cm = cs[j];
						ci = j;
					}
				}
			}
			if(rs[i] > rm){
				ri = i;
				rm = rs[i];
			}
		}
		int [][]rx = {rs};
		int [][]cx = {cs};
		pa2(rx);
		pa2(cx);
		System.out.println(rm + " " + cm);
		if(rm >= cm){
			System.out.println("row " + ri + " " + rm);
		} else {
			System.out.println("column " + ci + " " + cm );
		}
	}
	public static void findLI(int mat[][]){
		int r = mat.length; if(r == 0) {System.out.println("row 0 " + Integer.MIN_VALUE);return;}
		int c = mat[0].length; int ri = 0, ci = 0, rs = Integer.MIN_VALUE, cs = Integer.MIN_VALUE, ls = Integer.MIN_VALUE;
		boolean isRow = true;
		for(int i = 0; i < r; i++){
			int ts = 0;
			for(int j = 0; j < c; j++){
				ts += mat[i][j];
			}
			if(ts > rs){
				ri = i;rs = ts;
			}
		}
		ls = rs;
		for(int i = 0; i < c; i++){
			int ts = 0;
			for(int j = 0; j < r; j++){
				ts+=mat[j][i];
			}
			if(ts > ls){
				isRow = false;ri = i; ls = ts;
			}
		}
		String s = isRow ? "row " : "column ";
		System.out.println(s + ri + " " + ls);
	}
}