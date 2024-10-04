import sys
from collections import deque

input = sys.stdin.readline

n, k = map(int, input().split())
x_max = 100000

visited = [0] * (x_max + 1)


def bfs(x):
    q = deque([x])
    while q:
        x = q.popleft()
        if x == k:
            return visited[x]
        for nx in (x * 2, x - 1, x + 1):
            if 0 <= nx <= x_max and not visited[nx]:
                if nx == x * 2:
                    visited[nx] = visited[x]
                else:
                    visited[nx] = visited[x] + 1
                q.append(nx)


print(bfs(n))
