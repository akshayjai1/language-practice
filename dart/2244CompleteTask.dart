class Solution {
  int minimumRounds(List<int> tasks) {
      Map<int,int> m = {};
      for(int e in tasks)
          m[e] = (m[e]??0) + 1;
      var res = 0;
      for (int e in m.values){
          if(e == 1){
              return -1;
          }
        res += (e+2)~/3;
      }
      return res;
  }
}