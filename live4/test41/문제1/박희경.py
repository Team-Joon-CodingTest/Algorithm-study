"""
점화식: dp[i] = dp[i-2] + dp[i-3]
"""
import sys

input = sys.stdin.readline

t = int(input())
dp = [0 for _ in range(101)]

for _ in range(t):
    n = int(input())
    dp[0] = 1
    dp[1] = 1
    dp[2] = 1
    for i in range(3, n):
        dp[i] = dp[i-2] + dp[i-3]

    print(dp[n-1])
