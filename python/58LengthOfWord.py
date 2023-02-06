class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        count,found = 0,False
        for i in range(len(s) - 1, -1, -1):
            if s[i] == ' ':
                if found:
                    return count
                continue
            else:
                found = True
                count+=1
        return count