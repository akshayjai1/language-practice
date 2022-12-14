// https://leetcode.com/problems/longest-palindromic-substring/solutions/2910792/on-2-javascript-and-c/

// Notice c++ has substr, whose definition is substr(start, noOfChars)


class Solution {
public:
    string p = "";
    int pl = 0;
    int n = 0;
    void testPalindrome(int l, int r, string s, int odd) {
        while(l >=0 && r<n && s[l]==s[r]){
            if((r-l + 1) > pl){
                pl = r-l+1;
                p = s.substr(l,pl);
            }
            l--;r++;
        }
    }
    string longestPalindrome(string s) {
        n = s.size();
        for (int i = 0 ; i < n ; i++){
                testPalindrome(i,i,s,1);
                testPalindrome(i,i+1,s,0);
        }
        return p;
    }
};
