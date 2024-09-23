import sys

input = sys.stdin.readline

n = int(input())

dp = [[0, []] for _ in range(n + 1)]

dp[1][0] = 0    # 최솟값
dp[1][1] = [1]  # N을 1로 만드는 수

for i in range(2, n + 1):
    # 1을 뺀 경우
    dp[i][0] = dp[i - 1][0] + 1
    dp[i][1] = dp[i - 1][1] + [i]

    # 2로 나누어 떨어지는 경우
    if i % 2 == 0:
        if dp[i][0] > dp[i // 2][0] + 1:
            dp[i][0] = dp[i // 2][0] + 1
            dp[i][1] = dp[i // 2][1] + [i]
    # 3로 나누어 떨어지는 경우
    if i % 3 == 0:
        if dp[i][0] > dp[i // 3][0] + 1:
            dp[i][0] = dp[i // 3][0] + 1
            dp[i][1] = dp[i // 3][1] + [i]

print(dp[n][0])

for i in dp[n][1][::-1]:
    print(i, end=" ")