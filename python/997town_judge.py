# since ai trust bi, ai cannot be judge, of the bi's we have to exclude those who fall in ai set, there will be only one person in the bi set,
# there is one more relation asked, that anyone who goes in bi set, should be trusted by everyone in ai set.
# so we also maintain, list of people, who trust the possible judge
# if it is not empty he is town judge
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        if n == 1:
            return 1
        person_set = set()
        possible_judge_set = set()
        trustee_dict = dict()
        for r in trust:
            p,j = r
            person_set.add(p)
            possible_judge_set.add(j)
            if j in trustee_dict.keys():
                trustee_dict[j].append(p)
            else:
                trustee_dict[j] = [p]
        judge_set = possible_judge_set - person_set

        for pj in judge_set:
            if len(trustee_dict[pj]) == n - 1:
                return pj
        return -1