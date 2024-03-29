
class Tribonacci1137 {
	public int tribonacci(int n) {
			int[] cache = new int[39];
			cache[0] = 0;
			cache[1] = 1;
			cache[2] = 1;
			return getDPTri(n,cache);
	}
	public int getDPTri(int n, int[] cache){
			if(n < 3 || cache[n] != 0){
					return cache[n];
			} else {
					cache[n] = getDPTri(n - 3, cache) + getDPTri(n - 2, cache) + getDPTri(n - 1, cache);
					return cache[n];
			}
	}
}
/*
class Solution {
    public int tribonacci(int n) {
        int[] cache = new int[39];
        for(int i = 0;i<39;i++){
            cache[i]=-1;
        }
        cache[0] = 0;
        cache[1] = 1;
        cache[2] = 1;
        return getDPTri(n,cache);
    }
    public int getDPTri(int n, int[] cache){
        if(cache[n] != -1){
            return cache[n];
        } else {
            cache[n] = getDPTri(n - 1, cache) + getDPTri(n - 2, cache) + getDPTri(n - 3, cache);
            return cache[n];
        }
    }
}
*/