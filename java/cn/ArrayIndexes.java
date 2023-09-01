class ArrayIndexes {
	static int [] indexes;
	static int count;
	public static int[] allIndexes(int input[], int x) {
		indexes = new int[input.length];
		count = 0;
		indexHelper(input, x, 0);
		int [] n = new int[count];
		for(int i = 0; i < count; i++){
			n[i] = indexes[i];
		}
		// System.out.println(count);
		return n;
	}
	private static void indexHelper(int [] input, int x, int start){
		if(start >= input.length){
			return;
		} else if(input[start] == x){
			indexes[count] = start;
			count++;
			indexHelper(input, x, start + 1);
		} else {
			indexHelper(input, x, start + 1);
		}
	}
	public static void main(String args[]){
		ArrayIndexes a = new ArrayIndexes();
		int[] b = new int []{1,2,3,2};
		int [] c = ArrayIndexes.allIndexes(b,2);
		System.out.println("this is output of code ");
		for(int i : c){
			System.out.println(i);
		}
	}
}