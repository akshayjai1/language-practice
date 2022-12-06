import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class Winner2225 {
	class Solution {
    public List<List<Integer>> findWinners(int[][] matches) {
        Map<Integer,Integer> l = new TreeMap<>();
        for(int[] m:matches){
          int w = m[0];int ls = m[1];
          l.put(w,l.getOrDefault(w,0));
          l.put(ls,l.getOrDefault(ls,0)+1);
        }
        List<List<Integer>> r = Arrays.asList(new ArrayList<>(),new ArrayList<>());
      for(Integer p:l.keySet()){
        Integer noOfLosses = l.get(p);
        if(noOfLosses <=1){
          r.get(noOfLosses).add(p);
        }
      }
      return r;
    }
}
}
