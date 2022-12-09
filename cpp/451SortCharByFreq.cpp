class Solution {
public:
    string frequencySort(string s) {
      vector<pair<int,char>> hash('z'+1,{0,0});
      for(char c:s){
        hash[c]={hash[c].first+1,c};
      }
      sort(hash.begin(),hash.end());
      string r = "";
      for(auto p:hash){
        r = string(p.first,p.second)+r;
      }
      return r;
    }
};