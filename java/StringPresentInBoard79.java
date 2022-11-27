public class StringPresentInBoard79 {
	class Solution {
    public boolean exist(char[][] board, String word) {
        char[] w = word.toCharArray();
        for(int i = 0 ; i < board.length ; i++){
					for (int j = 0; j < board[0].length; j++) {
						// thing to note, we have to check there exists i,j, that returns true, if there exists one atleast then we return true;
                if(dfs(board,i,j,w,0))
                    return true;
            }
        }
        return false;
    }

		private boolean dfs(char[][] b, int i, int j, char[] w, int index) {
			// this should be the first thing to check, that means we have reached end of string and yet have not got false, so we should return true
        if(index == w.length)
            return true;
        if(i < 0 || j < 0 || i == b.length || j == b[0].length) {
            return false;
        }

        if(b[i][j] != w[index])
            return false;
        b[i][j]='#';
        boolean exists = dfs(b,i+1,j,w,index+1) || dfs(b,i-1,j,w,index+1) ||dfs(b,i,j+1,w,index+1) ||dfs(b,i,j-1,w,index+1);
        b[i][j]= w[index];
        return exists;
    }
}
}
