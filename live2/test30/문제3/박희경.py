import sys

input = sys.stdin.readline

n = int(input())  # 컴퓨터 수
edge = int(input())  # 간선

graph = [[] * (n + 1) for _ in range(n + 1)]

for _ in range(edge):
    a, b = map(int, input().split())

    graph[a].append(b)
    graph[b].append(a)

visited = [0] * (n + 1)
cnt = 0


def dfs(x):
    global cnt
    visited[x] = 1
    if len(graph[x]) == 0:
        return 0
    for i in range(len(graph[x])):
        if not visited[graph[x][i]]:
            dfs(graph[x][i])
            cnt += 1
    return cnt


print(dfs(1))
