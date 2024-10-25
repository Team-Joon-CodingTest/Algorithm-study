"""
dfs
"""
import sys

input = sys.stdin.readline

r, c, k = map(int, input().split())
grid = [list(input().rstrip()) for _ in range(r)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

answer = 0


def dfs(x, y, dist):
    global answer
    if x == 0 and y == c - 1 and dist == k:
        answer += 1
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < r and 0 <= ny < c and grid[nx][ny] == '.':
            grid[nx][ny] = 'T'
            dfs(nx, ny, dist + 1)
            # 끝까지 탐색한 후 원래대로 되돌려 놓기
            grid[nx][ny] = '.'


grid[r - 1][0] = 'T'
dfs(r - 1, 0, 1)
print(answer)
