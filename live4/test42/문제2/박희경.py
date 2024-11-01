import sys

input = sys.stdin.readline

n, m, k, x = map(int, input().split())
roads = [[sys.maxsize] * (n+1) for _ in range(n+1)]

for _ in range(m):
    a, b = map(int, input().split())
    roads[a][b] = 1


for k in range(1, n + 1):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            roads[i][j] = min(roads[i][j], roads[i][k] + roads[k][j])


for i in range(1, n + 1):
    if roads[x][i] == k:
        print(i)

