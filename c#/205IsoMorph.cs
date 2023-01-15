public class Solution {
    public String createCode(String st){
        Dictionary <String,String> d = new Dictionary<String,String>();
        int id = 0;
        String s = "";
        for(int i = 0; i < st.Length; i++){
            String si = st[i] + "";
            if(d.ContainsKey(si)){
                s+=d[si] + ".";
            } else {
                d[si] = id + "";
                s+= id + ".";
                id+=1;
            }
        }
        return s;
    }
    public bool IsIsomorphic(string s, string t) {
        String a = createCode(s);
        String b = createCode(t);
        return a == b;
    }
}