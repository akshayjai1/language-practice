/*
1. we want to update the array to minimise deviation.
2. deviation is the max of all differences = difference between max and min of array
3. to reduce difference we have to increase the min and decrease the max

4 we have two possible operations, even can be divided by 2, odd can be multiplied. This also gives us terminating condition as follows
   4.a since even can only be divided, that means they cannot be increased, so if we reach a stage, where our lowest is even number, than we are stuck at increasing the minimum.

   4.b similarly if we reach a stage where max element is odd, since it cannot further decrease, it is also final state for our array mutation. to achieve goal of minimum deviation.

There is on optimization in the code, it is based on observation
that odd elements can have only transformation i.e. to increased them by multiplying by 2.

create priority queue of max elements, all are even, so they cannot be further increased
        so our only job is to take the max and reduce it.

        ++ we are doing one more thing over here
it is

keeping note of min of deviations, after taking out the max, thus we atleast know the min deviation
we will be pushing all elements to max priority queue.

 */
class Solution {
public:
    int minimumDeviation(vector<int>& nums) {
        int mine = INT_MAX,maxe=INT_MIN;
        priority_queue<int>pq;
        /* create priority queue of max elements, all are even, so they cannot be further increased
        so our only job is to take the max and reduce it */
        for(int n:nums){
            if(n%2==1){
                n*=2;
            }
            mine = min(mine,n);
            maxe = max(maxe,n);
            pq.push(n);
        }
        int ans = maxe - mine;
        while(pq.top() % 2 == 0){
            int top = pq.top();pq.pop();
            ans = min(ans,top-mine);
            top/=2;
            mine = min(mine,top);
            pq.push(top);
        }
        ans = min(ans, pq.top()-mine);
        return ans;

    }
};