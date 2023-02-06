# neetcoode youtube
from collections import Counter


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):# step 1: check 1
            return False
        s1C,s2C = [0]*26,[0]*26 # step 2: create map
        for i in range(len(s1)):
            index = ord(s1[i]) - ord('a')
            s1C[index] += 1
            index = ord(s2[i]) - ord('a')
            s2C[index] += 1
        matches = 0
        for i in range(26): # step 3: count matches
            matches += (1 if s1C[i]==s2C[i] else 0)
        l = 0
        for r in range(len(s1),len(s2)):# step 4: sliding window, and updating match count
            # s2[r] is the character being added
            rindex = ord(s2[r]) - ord('a')
            lindex = ord(s2[l]) - ord('a')
            s2C[lindex]-=1
            if s1C[lindex] == s2C[lindex]:
                matches+=1
            elif s1C[lindex] == s2C[lindex] + 1:
                matches-=1
            s2C[rindex]+=1
            if s1C[rindex] == s2C[rindex]:
                matches+=1
            elif s1C[lindex] == s2C[lindex] - 1:
                matches-=1
        return matches == 26
# https://leetcode.com/problems/permutation-in-string/solutions/1761953/python3-sliding-window-optimized-explained/?languageTags=python3
class Solution2:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        cntr, w, match = Counter(s1), len(s1), 0

        for i in range(len(s2)):
            if s2[i] in cntr:
                if not cntr[s2[i]]: match -= 1
                cntr[s2[i]] -= 1
                if not cntr[s2[i]]: match += 1

            if i >= w and s2[i-w] in cntr:
                if not cntr[s2[i-w]]: match -= 1
                cntr[s2[i-w]] += 1
                if not cntr[s2[i-w]]: match += 1

            if match == len(cntr):
                return True

        return False