"""
bfs로도 풀 수 있지만, 그 수학 문제였음
dp[i][j] = dp[i-1][j] + dp[i][j-1]
"""


def solution(m, n, puddles):
    grid = [[0] * (m + 1) for _ in range(n + 1)]

    # 집(시작) 위치
    grid[1][1] = 1

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if i == 1 and j == 1:
                continue
            # 물에 잠긴 지역인 경우
            if [j, i] in puddles:
                grid[i][j] = 0
            else:
                # 점화식
                grid[i][j] = (grid[i - 1][j] + grid[i][j - 1]) % 1000000007
    return grid[n][m]


"""
bfs
"""
from collections import deque


def solution(m, n, puddles):
    grid = [[0] * m for _ in range(n)]

    # 물에 잠긴 지역 표시
    for j, i in puddles:
        grid[i - 1][j - 1] = -1

    print(grid)

    # 하, 우
    dx = [1, 0]
    dy = [0, 1]

    def bfs(x, y):
        cnt = 0
        q = deque([(x, y)])
        grid[x][y] = 1
        while q:
            x, y = q.popleft()
            for i in range(2):
                nx, ny = x + dx[i], y + dy[i]
                if 0 <= nx < n and 0 <= ny < m and grid[nx][ny] != -1:
                    if grid[nx][ny] == 0:
                        q.append((nx, ny))
                    grid[nx][ny] += grid[x][y]
        return grid[n - 1][m - 1] % 1000000007

    return bfs(0, 0)



