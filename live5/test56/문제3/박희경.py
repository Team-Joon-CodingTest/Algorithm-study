"""
dp 문제 같은데..
dp[0] = 0
dp[1] = 1
dp[2] = 2   // (1, 1), (2)
dp[3] = 3   // (1, 1, 1) (1, 2) (2, 1)
dp[4] = 5
dp[5] = 8   // (1, 1, 1, 1, 1) (1, 1, 1, 2) * 4 (1, 2, 2) * 3
dp[n] = dp[n-2] + dp[n-1]
"""


def solution(n):
    if n == 1:
        return 1
    if n == 2:
        return 2

    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2

    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n] % 1234567