"""
bottom-up
max(n-1번 칸에서 올라온 경우의 최댓값, n-2번 칸에서 올라온 경우의 최댓값)
"""
import sys

input = sys.stdin.readline

N = int(input())
stair = [0] * 301
for i in range(1, N + 1):
    stair[i] = int(input())

dp = [0] * 301

# 기저 상태
dp[1] = stair[1]
dp[2] = stair[1] + stair[2]
dp[3] = max(stair[1] + stair[3], stair[2] + stair[3])

# 점화식
for i in range(4, N + 1):
    dp[i] = max(dp[i - 3] + stair[i] + stair[i - 1], dp[i - 2] + stair[i])

print(dp[N])