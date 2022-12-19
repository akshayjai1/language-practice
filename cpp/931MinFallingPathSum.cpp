class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& A) {
        int r = A.size();
        for(int i = 1; i< r; i++){
            for(int j = 0; j < r ; j++){
                A[i][j] += min({A[i-1][j],A[i-1][max(0,j-1)],A[i-1][min(r-1,j+1)]});
            }
        }
        int mini = INT_MAX;
        for(int i : A[r-1]){
            mini = min(mini, i);
        }
        return mini;
    }
};