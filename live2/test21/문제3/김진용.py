n = int(input())
m = []
for _ in range(n):
    m.append(list(map(int, input().split())))

visited = [[0]*n for _ in range(n)]
def dfs(x, y):
    visited[x][y] = 1

    move = m[x][y]

    dx = [move, 0]
    dy = [0, move]

    for i in range(2):
        nx = x + dx[i]
        ny = y + dy[i]

        if 0 <= nx and nx < n and 0 <= ny and ny < n and visited[nx][ny] == 0:
            dfs(nx, ny)

dfs(0, 0)

if visited[n-1][n-1] == 1:
    print("HaruHaru")
else:
    print("Hing")