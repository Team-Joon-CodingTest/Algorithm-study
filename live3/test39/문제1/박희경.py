"""
점화식:
dp[1] = 1
dp[2] = 2
dp[3] = 4   # 1+1+1, 1+2, 2+1, 3
dp[4] = 7
dp[5] = 12   # 1+1+1+1+1, 1+1+1+2 (위치 바꿔서 4개), 1+2+2 (3개), 1+1+3(3개), 2+3 (2개)

dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
"""
import sys

input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    dp = [0] * (n+1)

    for i in range(1, n+1):
        if i == 1 or i == 2:
            dp[i] = i
        elif i == 3:
            dp[i] = 4
        else:
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]

    print(dp[-1])
