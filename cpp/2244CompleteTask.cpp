#include <iostream>
#include <vector>
#include <unordered_map>
#include <bits/stdc++.h>

using namespace std;

class Solution
{

public:
    int minimumRounds(vector<int>& A) {
			unordered_map<int, int> count;
			int res = 0;
			for (int a : A)
			{
				++count[a];
        }
        for(auto& it: count){
            if (it.second == -1){
                return -1;
            }
            res +=(it.second + 2) / 3;
        }
        return res;
    }
};

int minimumRounds(vector<int>& A) {
        unordered_map<int, int> count;
        int res = 0, freq1;
        for (int a: A)
            ++count[a];
        for (auto& it: count) {
            if (it.second == 1) return -1;
            res += (it.second + 2) / 3;
        }
        return res;
    }

/*
we can keep a hashmap, and keep of decreasing numbers.
basically our work is to find which number can be reduced to zero by reducing by 2 or 3 continuously.

any number, which is multiple of 3, or multiple of 2, can be reduced for sure.
even prime number like 17, once reduced by 2, can become divisible by 3..
so once we get a number, we check whether it is divisible by 2 or 3, if not, reduce 2 and check if it is divisible by 3. till the time, number is greater than 2

so answer i all numbers can be reduced, except -1, and how many steps we need for other numbers.
(freq + 2)//3. expanation below

Tasks with same difficulty level can be done together,
in group of 2-tasks or 3-tasks.

So we count the frequnce freq for each level.

If freq = 1, not possible, return -1
If freq = 2, needs one 2-tasks
If freq = 3, needs one 3-tasks
If freq = 3k, freq = 3 * k, needs k batchs.
If freq = 3k + 1, freq = 3 * (k - 1) + 2 + 2, needs k + 1 batchs.
If freq = 3k + 2, freq = 3 * k + 2, needs k + 1 batchs.

To summarize, needs (freq + 2) / 3 batch,
return the sum of (freq + 2) / 3 if possible.

 */
