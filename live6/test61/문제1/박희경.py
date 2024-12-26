import sys
from collections import *

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n, m = map(int, input().split())  # 국가 수, 비행기 종류

    graph = [[] for _ in range(n+1)]

    for _ in range(m):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)

    visited = [0] * (n + 1)
    q = deque([1])  # 시작 국가
    cnt = 0

    while q:
        country = q.popleft()
        visited[country] = 1

        # 인접한 국가
        for c in graph[country]:
            if visited[c] == 0:
                visited[c] = 1
                cnt += 1
                q.append(c)
    print(cnt)


"""
2
3 3
1 2
2 3
1 3
5 4
2 1
2 3
4 3
4 5
"""