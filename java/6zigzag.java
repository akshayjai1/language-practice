class Solution {
    public String convert(String s, int numRows) {
        if(numRows == 1) return s;
        StringBuilder r = new StringBuilder();
        for(int i = 0; i < numRows; i++){
            int inc = 2*(numRows - 1);
            for(int j = i; j < s.length(); j+=inc){
                r.append(s.charAt(j));
                if(i > 0 && i < (numRows - 1) && ((j + inc - 2*i) < s.length())){
                    r.append(s.charAt(j + inc - 2*i));
                }

            }
        }
        return r.toString();
    }
}