from typing import List
def k_Transformation(n : int, m : int, k : int, grid : List[List[int]], q : int, queries : List[List[int]]) -> List[int]:
    # code here
    r = len(grid)
    c = len(grid[0])
    res = []
    for o in range(q):
        t,val,tx,ty,bx,by = queries[o]
        rr = t % k
        findn = (val + (0 if rr == 0 else k - rr)) % k
        count = 0
        for i in range(tx, bx + 1):
            for j in range(ty,by + 1):
                if grid[i][j] == findn:
                    count+=1
        res.append(count)
    return res
# x = [[0,1,1],[1,2,3],[0,2,1]]
# y = [[0,1,0,0,2,2]]
# z = k_Transformation(3,3,4,x,1,y)

x = [[2,0],[1,0],[0,1]]
y = [[4,2,1,0,1,1],[4,2,1,0,2,1]]
z = k_Transformation(3,2,3,x,2,y)
print("output is z")
print(z)