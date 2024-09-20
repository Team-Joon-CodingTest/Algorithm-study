import sys
input = sys.stdin.readline




def dfs(x):
    visited[x] = True

    if not visited[graph[x]]:
        dfs(graph[x])


test = int(input())

for _ in range(test):
    n = int(input())
    ary = list(map(int, input().split()))

    visited = [False] * (n + 1)

    graph = [0] * (n + 1)
    for i in range(1, n + 1):
        graph[i] = ary[i - 1]

    cnt = 0

    for i in range(1, n + 1):
        if not visited[i]:
            dfs(i)
            cnt += 1

    print(cnt)