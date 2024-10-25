"""
dp[1] = 1
dp[2] = 2; 2, 1+1
dp[3] = 4; 3, 2+1, 1+2, 1+1+1
dp[4] = 7; 3+1, 1+3, 2+2, 2+1+1, 1+2+1, 1+1+2, 1+1+1+1

dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
"""
import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    dp = [0] * (n + 1)

    for i in range(1, n + 1):
        if i == 1:
            dp[1] = 1
        elif i == 2:
            dp[2] = 2
        elif i == 3:
            dp[3] = 4
        else:
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]

    print(dp[n])
