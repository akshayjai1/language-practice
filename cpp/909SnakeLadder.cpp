class Solution{
    public:
        int snakesAndLadders(vector<vector<int>> &board){
            int n = board.size();
            vector<int>strip(n*n,-1);
            for(int i = n-1, stripIndex = 0; i >= 0; i--){
                for(int j = 0; j < n && stripIndex < strip.size(); j++){

                    if(board[i][j] != -1){
                        strip[stripIndex] = board[i][j] -1;
                    }
                    stripIndex++;
                }
                i--;
                for(int j = n - 1; j >= 0 && stripIndex < strip.size(); j--){
                    if(board[i][j] != -1){
                        strip[stripIndex] = board[i][j] - 1;
                    }
                    stripIndex++;
                }
            } // end of for loop

            vector<int> jumpsCount(n*n,INT_MAX);
            queue<int> q;
            q.push(0);
            jumpsCount[0]=0;
            while(!q.empty()){
                int square = q.front();q.pop();
                for(int i = 1; i <= 6 && square+i < n*n; i++){
                    int nextSquare = strip[square + i] == -1 ? square + i : strip[square + i];
                    if(jumpsCount[nextSquare] == INT_MAX){
                        jumpsCount[nextSquare] = jumpsCount[square] + 1;
                        q.push(nextSquare);
                    }
                }
            }
            return jumpsCount[n*n - 1] == INT_MAX ? -1 : jumpsCount[n*n-1];
        }
};