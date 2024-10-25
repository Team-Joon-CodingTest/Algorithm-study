class Solution(object):
    def minPathSum(self, grid):
        n, m = len(grid), len(grid[0])

        # 첫번째 행
        for i in range(1, m):
            grid[0][i] += grid[0][i-1]

        # 첫번째 열
        for j in range(1, n):
            grid[j][0] += grid[j-1][0]

        for i in range(1, n):
            for j in range(1, m):
                grid[i][j] += min(grid[i-1][j], grid[i][j-1])

        return grid[-1][-1]