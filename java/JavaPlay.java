class JavaPlay{
	public static void main(String [] args){
		System.out.println("solution");
		int [][] a = {{1,2,3},{4,5,6},{7,8,9}};
		pa2(a);
		totalSum(a);
	}
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

	public static void totalSum(int[][] mat) {
		//Your code goes here
		int r = mat.length, c = mat[0].length;
		int s = 0;
		for(int i = 0; i < r; i++){
			s += mat[i][0];
			s += mat[i][c-1];
		}
		// System.out.println(s);
		for(int i = 1; i < c-1; i++){
			s += mat[0][i];
			s+= mat[r-1][i];
		}
		// System.out.println(s);
		for(int i = 1; i < r-1; i++){
				s += mat[i][i];
		}
		// System.out.println(s);
		for(int i = 1; i < r-1; i++){
			s+=mat[r-1 - i][i];
		}
		// System.out.println(s);
		if(r%2==1){
			s-=mat[r/2][r/2];
		}
		System.out.println(s);
	}
}