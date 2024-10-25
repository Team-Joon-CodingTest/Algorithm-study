""""
수빈이의 위치가 X일 때
걷는다면; 1초 후에 X-1 또는 X+1로 이동
순간이동을 하는 경우; 1초 후에 2*X의 위치로 이동

BFS
"""
import sys
from collections import deque

input = sys.stdin.readline

n, k = map(int, input().split())
n_max = 100000
visited = [0] * (n_max + 1)


def bfs(n):
    q = deque([n])
    while q:
        x = q.popleft()
        if x ==k:
            return visited[x]
        for nx in (x - 1, x + 1, x * 2):
            if 0 <= nx <= n_max and not visited[nx]:
                visited[nx] = visited[x] + 1
                q.append(nx)

print(bfs(n))
