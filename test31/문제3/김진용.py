import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n, m = map(int, input().split())

graph = []

for _ in range(n):
    graph.append(list(map(int, input().split())))

visited = [[False] * m for _ in range(n)]


# print(graph)


def dfs(x, y):
    global m_cnt
    m_cnt += 1
    visited[x][y] = True

    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 1:
            if not visited[nx][ny]:
                dfs(nx, ny)


result_ary = []

cnt = 0
for i in range(n):
    for j in range(m):
        if not visited[i][j] and graph[i][j] == 1:
            m_cnt = 0
            dfs(i, j)
            cnt += 1
            result_ary.append(m_cnt)
print(cnt)
if len(result_ary) == 0:
    print(0)
else:
    print(max(result_ary))
