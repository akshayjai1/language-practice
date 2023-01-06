from typing import List
class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        rows,cols = len(grid),len(grid[0])
        start_r,start_c = 0,0
        move_blocks = 0
        total_paths = 0
        for r in range(rows):
            for c in range(cols):
                g = grid[r][c]
                if g >= 0:
                    move_blocks+=1
                if g == 1:
                    start_r,start_c = r,c

        # r = row, c = column, rb = remaining_blocks
        def helper(r, c, rb):
            nonlocal total_paths
            if rb == 1 and grid[r][c] == 2:
                total_paths+=1
                return

            rb-=1
            temp = grid[r][c]
            grid[r][c] = -4
            for rr,cc in [(0,1),(0,-1),(1,0),(-1,0)]:
                next_row,next_col = r + rr, c + cc
                # check out of bound
                if not (0<=next_row<rows and 0<=next_col<cols):
                    continue
                if grid[next_row][next_col] < 0:
                    continue
                helper(next_row,next_col,rb)
            grid[r][c] = temp

        helper(start_r,start_c,move_blocks)
        return total_paths

k = Solution()
l = k.uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]])
print(l)