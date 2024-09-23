import sys

input = sys.stdin.readline

n, k = map(int, input().split())
coins = list(int(input()) for _ in range(n))

coins.sort()

dp = [0 for _ in range(k+1)]

# 초기화
dp[0] = 1

for coin in coins:
    for i in range(coin, k+1):
        if i-coin >= 0:
            dp[i] += dp[i-coin]

print(dp[k])

"""
굉장히 헷갈리는군

coin == 1원 일 때,
    dp[1] = 1 
    dp[2] = 1 (1원으로 2 만드는 경우의 수)
    dp[3] = 1 ...
coin == 2원 일 때,
    dp[2](1, 2원으로 2를 만드는 경우의 수) = dp[2](1원으로 2 만드는 경우) + dp[0]
    => dp[2] = 1 + 1 = 2
    dp[4](1, 2원으로 4를 만드는 경우의 수) = dp[4](1원으로 4 만드는 경우) + dp[4-2]
    => dp[4] = 1 + 2 = 3
"""

