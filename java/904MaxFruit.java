class Solution {
    public int totalFruit(int[] fruits) {
        int total = 0, result = 0, left = 0;
        Map<Integer,Integer> m = new HashMap<>();
        for(int f: fruits){
            m.put(f,m.getOrDefault(f,0)+1);
            total+=1;
            while(m.size() > 2){
                int fr = fruits[left];
                int current = m.get(fr);
                if(current == 1){
                    m.remove(fr);
                } else {
                    m.put(fr,m.get(fr) - 1);
                }
                total -=1;
                left+=1;
            }
            result = Math.max(result, total);
        }
        return result;
    }
}