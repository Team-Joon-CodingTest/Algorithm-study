"""
dfs
"""
import sys

input = sys.stdin.readline
sys.setrecursionlimit(10**9)    # 반복제한 늘리기

N, R, Q = map(int, input().split())

graph = [[] for _ in range(N + 1)]
visited = [0 for _ in range(N + 1)]

for _ in range(N - 1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)


def dfs(node):
    global visited
    visited[node] = 1
    for n in graph[node]:
        if visited[n] == 0:
            visited[node] += dfs(n)
    return visited[node]


dfs(R)
for _ in range(Q):
    root = int(input())
    print(visited[root])
