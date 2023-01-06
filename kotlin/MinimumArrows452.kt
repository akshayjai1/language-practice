class Solution {
    fun findMinArrowShots(points: Array<IntArray>): Int {
     points.sortWith(compareBy{it[1]});
     var count = 1;
     var arrowPosition = points[0][1];
     for(index in 1 until points.size){
         if(points[index][0] > arrowPosition){
             count++;
             arrowPosition = points[index][1];
         }
     }
     return count;
    }
}