import java.util.* ;
import java.io.*;

public class J1345minJumps {
    public static int minJumps(int[] arr) {
     HashMap<Integer,List<Integer>> cache = new HashMap<>();
     for(int j = 0; j <  arr.length; j++){
         cache.computeIfAbsent(arr[j],f->new ArrayList<>()).add(j);
     }
     pam(cache,"cache");
     HashSet<Integer> visited = new HashSet<>();
     Queue<Integer> q = new LinkedList<>();
     visited.add(0);
     q.add(0);
     int step = 0;
     System.out.println(" -- ");
     while(!q.isEmpty()){
     System.out.println(" -- ");
        pas(visited,"visited");
        for(int lk : visited){
            System.out.print(" " + lk);
         }
         int n = q.size();
         System.out.println("step incremented to " + step + " \n que size is " + n + " and is printed below");
         for(int lk : q){
            System.out.print(" " + lk);
         }
         System.out.println();
         for(int i = 0; i< n; i++){
             int polledIndex = q.poll();
             System.out.println("polled = "+polledIndex);
             if(polledIndex == arr.length-1) return step;
             List<Integer> indices;
             indices = cache.get(arr[polledIndex]);
             System.out.println("searching indices for " + polledIndex + " having value = " + arr[polledIndex] + " got length = " + indices.size());
             if(polledIndex + 1 < arr.length && !visited.contains(polledIndex + 1)){
               indices.add(polledIndex+1);
             }
             if(polledIndex - 1 >= 0 && !visited.contains(polledIndex + 1)){
               indices.add(polledIndex-1);
             }
             pal(indices,"indices");
             for(int lk : indices){
                System.out.print(" " + lk);
             }
             System.out.println("\n\n indices are printed above above");
             for(int k : indices){
                 if(!visited.contains(k)){
                     q.add(k);
                     visited.add(k);
                     System.out.println("added " + k);
                 }
             }
         }
         step+=1;

     }
     return -1;
    }
    public static void pa(int[] a){
        System.out.println("----");
        for(int c:a){
            System.out.print(" " + c);
        }
        System.out.println("\n----");
    }
    public static void pal(List<Integer> l,String name){
        System.out.println("---- printing list with name = " + name);
        for(int c:l){
            System.out.print(" " + c);
        }
        System.out.println("\n----");
    }
    public static void pas(Set<Integer> l,String name){
        System.out.println("---- printing set with name = " + name);
        for(int c:l){
            System.out.print(" " + c);
        }
        System.out.println("\n----");
    }
    public static void pam(Map<Integer,List<Integer>> cache,String name){
        System.out.println("---- printing map with name = " + name);
        for(Map.Entry<Integer,List<Integer>> entry : cache.entrySet()){
        System.out.println(entry.getKey() + " : " + entry.getValue());
    }
        System.out.println("\n----");
    }
	public static void main(String[] args){
        int a[] = {100,-23,-23,404,100,23,23,23,3,404};
        // sortArray(a);
        /**
        test cases, 1: search for 10 -- working
        2: search for 0 or -3 -- working
        3: search for 100 or -3 -- working
        */
        int c = minJumps(a);
        System.out.println("Min Jumps is " + c);
	}
}
