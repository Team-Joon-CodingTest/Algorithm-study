import sys

input = sys.stdin.readline

n, m = map(int, input().split())

ary = []

for i in range(n):
    ary.append(list(map(int, input().split())))
# print(ary)

dp = [[0] * (m+1) for _ in range(n+1)]
# print(dp)

for i in range(1, n+1):
    for j in range(1, m+1):
        dp[i][j] = ary[i-1][j-1] + dp[i][j-1] + dp[i-1][j] - dp[i-1][j-1]

test = int(input())
for t in range(test):
    i, j, x, y = map(int, input().split())

    print(dp[x][y] - dp[i-1][y] - dp[x][j-1] + dp[i-1][j-1])