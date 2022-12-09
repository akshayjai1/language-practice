class Solution {
public:
    string reverseWords(string s) {
        stringstream ss(s);
        string temp;
        vector<string> v;
        while(ss >> temp){
            v.push_back(temp);
        }
        string ans;
        for(int i = v.size() - 1; i > -1; i--){
            if(i!=v.size()-1) ans+=" ";
            ans+=v[i];
        }
        return ans;

    }
};