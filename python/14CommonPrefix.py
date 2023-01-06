'''
Intuition
if we want to find longest common prefix, we can start with first word, and take first char, if that first character is present in all the strings, it is valid to be part of common prefix, else we return '';
while we have the char at the mentioned index and there is no index out of bound

Approach
we have to iterate using index from 0 to length of first word.
take char at index of current word, if this char is not present at the index in other words, we return the common_prefix.
if the char is present at the required index in all words, we add the char to common_prefix

Complexity
Time complexity:
Space complexity:
Code

approach
https://leetcode.com/problems/longest-common-prefix/solutions/2986249/easy-python-check-for-char-in-every-index-and-return-early-in-case-of-failure/
'''
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs[0]) == 0:
            return ""
        p = ''
        i = 0
        while i < len(strs[0]):
            c = strs[0][i]
            for s in strs:
                if i >= len(s) or not(c == s[i]):
                    return p
            p+=c
            i+=1
        return p