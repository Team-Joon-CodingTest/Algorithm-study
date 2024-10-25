"""
dfs
상 하 좌 우 1이 나올 때까지 일단 쭉
"""


# 세로 N, 가로 M
N, M = map(int, input().split())

case = []
for i in range(N):
    case.append(list(map(int, input().strip())))

visited = [[0] * M for _ in range(N)]


def dfs(x, y):
    if x < 0 or x >= N or y < 0 or y >= M:
        return False
    if case[x][y] == 0 and visited[x][y] == 0:
        visited[x][y] = 1
        dfs(x-1, y)
        dfs(x, y-1)
        dfs(x+1, y)
        dfs(x, y+1)
        return True
    return False


result = 0
for i in range(N):
    for j in range(M):
        if dfs(i, j):
            result += 1

print(result)


"""
15 14
00000111100000
11111101111110 
11011101101110
11011101100000 
11011111111111 
11011111111100 
11000000011111 
01111111111111 
00000000011111 
01111111111000 
00011111111000 
00000001111000 
11111111110011 
11100011111111 
11100011111111
"""