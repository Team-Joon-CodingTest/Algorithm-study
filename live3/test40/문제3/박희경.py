import sys

input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))

dp = [[0] * 2 for _ in range(200001)]

for i in range(n):
    cur = a[i]
    if i == 0:
        dp[i][0] = 0  # 최대 이익
        dp[i][1] = cur  # 최소 주가
    else:
        dp[i][0] = max(dp[i - 1][0], cur - dp[i - 1][1])
        dp[i][1] = min(dp[i - 1][1], cur)

print(dp[n-1][0])
