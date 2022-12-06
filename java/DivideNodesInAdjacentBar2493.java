import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;

//Java program to implement in-built pair classes
import javafx.util.Pair;

public class DivideNodesInAdjacentBar2493 {
	public static void main(String [] args){
		System.out.println("main function calling Solution");
		DivideNodesInAdjacentBar2493 d = new DivideNodesInAdjacentBar2493()
		d.magnificentSets(0, null);
	}
    Map<Integer, List<Integer>> graph = new HashMap<>();
    Map<Integer, Integer> data = new HashMap<>(); // min_node, max_step

    private void constructGraph(int[][] edges, int n){
        for(int i=0;i<n;i++){
            graph.put(i, new ArrayList<>());
        }

        for(int[] edge: edges){
            int n1 = edge[0]-1;
            int n2 = edge[1]-1;
            graph.get(n1).add(n2);
            graph.get(n2).add(n1);
        }
    }

    public int magnificentSets(int n, int[][] edges) {
        int[] distances = new int[n];
        constructGraph(edges,n);

        Queue<Pair<Integer, Integer>> nodes = new LinkedList<>(); //current node, last node

        for (int i = 0; i < n; ++i) {
            Arrays.fill(distances,-1);
            int step = 0;

            distances[i] = 0;
            nodes.add(new Pair(i, -1));
            int minNode = i;

            while (true) {
                int k = nodes.size();
                if(k==0){
                    break;
                }
                ++step;
                while (k>0) {
                    k--;
                    Pair<Integer, Integer> p = nodes.poll();
                    int node = p.getKey();
                    int last = p.getValue();
                    for (int next: graph.get(node)) {
                        if (next == last) continue; // prevent going backward
                        if (distances[next] == -1) { // not visited before
                            distances[next] = step;
                            nodes.add(new Pair(next, node));
                            minNode = Math.min(minNode, next);
                        } else { // visited before
                            if ((distances[next] - step) % 2!=0) return -1; // odd cycles
                        }
                    }
                }
            }
            data.put(minNode,Math.max(data.getOrDefault(minNode,0), step));
        }
        int result = 0;
        for(Integer key: data.keySet()){
            result += data.get(key);
        }
        return result;
    }
}

/*
try every possible root.

we want every edge to belong to adjacent groups.
dfs, adjacent criter
https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/discuss/2875468/JavaScript-solution-based-on-great-idea-from-logan138

https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/discuss/2876565/Javascript-Union-Find-and-BFS

https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/discuss/2875379/Video-Explanation-(Building-from-scratch-with-Intuitions)

*/