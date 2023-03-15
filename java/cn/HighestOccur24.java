class HighestOccur24 {
	public static void main(String []args){

	}
	public static char highestOccuringChar(String str) {
		int max = -1;
		int [] d = new int[256];
		// if(str)
		int t;
		char fc = '\0';
		for(int i = 0; i < str.length(); i++){
			t = str.charAt(i) - 'a';
			d[t]+=1;
			if(d[t] > max){
				fc = str.charAt(i);
				max = d[t];
			}
		}
		return fc;
	}
	public static char highestOccuringChar1(String str) {
		int max = -1;
		int n = str.length();
		int [] f = new int[256];
		char c = '\0';
		for(int i = 0; i < n ; i++){
			char cc = str.charAt(i);
			f[cc]++;
			max = Math.max(max,f[cc]);
		}
		for(int i = 0; i < n; i++){
			if(f[str.charAt(i)] == max){
				c = str.charAt(i);
				break;
			}
		}
		return c;
	}
}