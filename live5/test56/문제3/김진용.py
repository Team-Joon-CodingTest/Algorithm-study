def solution(n):
    dp = [-1] * 2001
    dp[1] = 1
    dp[2] = 2
    dp[3] = 3
    dp[4] = 5
    dp[5] = 8

    for i in range(6, 2001):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n] % 1234567


print(solution(4))
print(solution(3))
#
# 1 1 1 1 1
# 2 1 1 1 1
# 1 2 1 1 1
# 1 1 2 1 1
# 1 1 1 2 1
# 1 1 1 1 2
# 2 2 1
# 1 2 2
