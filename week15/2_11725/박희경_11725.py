"""
DFS
"""
import sys

input = sys.stdin.readline

N = int(input())

# 그래프 생성 (인접리스트)
graph = [[] for _ in range(N + 1)]
for i in range(N - 1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [0] * (N + 1)


def dfs(graph, node):
    stack = [node]
    while stack:
        parents = stack.pop()
        for n in graph[parents]:
            if not visited[n]:
                visited[n] = parents  # 방문 안 했으면 부모 노드로 저장
                stack.append(n)
    return visited


dfs(graph, 1)
for i in range(2, N + 1):
    print(visited[i])
