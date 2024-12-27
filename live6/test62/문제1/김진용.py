import sys

input = sys.stdin.readline

R, C, Q = map(int, input().split())

picture = []
for _ in range(R):
    picture.append(list(map(int, input().split())))

dp = [[0]*(C+1) for _ in range(R+1)]

for i in range(1, R+1):
    for j in range(1, C+1):
        dp[i][j] = picture[i-1][j-1] + dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]

for _ in range(Q):
    i, j, x, y = map(int, input().split())

    result = dp[x][y] - dp[i-1][y] - dp[x][j-1] + dp[i-1][j-1]
    print(result//((x-(i-1))*(y-(j-1))))
