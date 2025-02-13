import sys
from collections import *

input = sys.stdin.readline

r, c = map(int, input().split())
grid = []
for _ in range(r):
    grid.append(list(map(str, input().rstrip())))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


def bfs(a, b):
    sheep = 0
    wolf = 0

    q = deque([(a, b)])
    if grid[a][b] == 'o':
        sheep += 1
    elif grid[a][b] == 'v':
        wolf += 1

    grid[a][b] = '#'

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < r and 0 <= ny < c and grid[nx][ny] != '#':
                if grid[nx][ny] == 'o':
                    sheep += 1
                elif grid[nx][ny] == 'v':
                    wolf += 1

                grid[nx][ny] = '#'
                q.append((nx, ny))
    if wolf >= sheep:
        return 0, wolf
    else:
        return sheep, 0


total_sheep, total_wolf = 0, 0
for i in range(r):
    for j in range(c):
        if grid[i][j] in ('o', 'v'):
            tmp_sheep, tmp_wolf = bfs(i, j)
            total_sheep += tmp_sheep
            total_wolf += tmp_wolf
print(total_sheep, total_wolf)

"""
6 6
...#..
.##v#.
#v.#.#
#.o#.#
.###.#
...###
"""