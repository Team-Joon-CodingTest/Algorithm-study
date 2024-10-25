import sys
from collections import deque

input = sys.stdin.readline

n, m, k = map(int, input().split())
graph = [[] * (n + 1) for _ in range(n + 1)]

visited1 = [0] * (n + 1)
visited2 = [0] * (n + 1)

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# 정렬
for i in range(len(graph)):
    graph[i].sort()


def dfs(x):
    visited1[x] = 1
    print(x, end=' ')
    if len(graph[x]) != 0:
        for i in range(len(graph[x])):
            if not visited1[graph[x][i]]:
                dfs(graph[x][i])


def bfs(x):
    q = deque([x])
    visited2[x] = 1
    while q:
        x = q.popleft()
        print(x, end=' ')
        for i in range(len(graph[x])):
            if not visited2[graph[x][i]]:
                q.append(graph[x][i])
                visited2[graph[x][i]] = 1


dfs(k)
print()
bfs(k)
