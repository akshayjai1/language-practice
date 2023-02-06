import java.util.*;
// "static void main" must be defined in a public class.
public class Main {
    static int [] or;
    public static boolean isInOrder(String s, String t){
        int l1 = s.length();int l2 = t.length(); int l = Math.min(l1,l2);
        for(int i = 0; i < l; i++){
            char c1 = s.charAt(i);char c2 = t.charAt(i);
            int i1 = c1 - 'a'; int i2 = c2 - 'a';
            boolean bo = (or[i1] > or[i2]);
            System.out.println("checking c1 =" + c1 + " and c2 = " + c2 + " i1 = " + i1 + " i2 = " + i2 + " and or1 = " + or[i1] + " and or2 = " + or[i2] + " bool = " + bo );
            if(or[i1] > or[i2]){
                return false;
            } else if(or[i1] < or[i2]) {
                return true;
            }
        }
        return l1 <= l2;
    }
    public static boolean isAlienSorted(String[] words, String order) {
        or  = new int[56];
        int l = order.length();
        for(int i = 0; i < order.length(); i++){
            char c = order.charAt(i);
            int id = c - 'a';
            System.out.println(c + " maps to " + id);
            or[id] = i;
        }
        // System.out.println(or);
        for(int j = 1; j < words.length; j++){
            if(!isInOrder(words[j-1],words[j])){
                System.out.println("returning for j = " + j);
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        String [] s  = new String[]{"word","world","row"};
        String ord = "worldabcefghijkmnpqstuvxyz";
        boolean b = isAlienSorted(s,ord);
        System.out.println("output is " + b);
    }
}