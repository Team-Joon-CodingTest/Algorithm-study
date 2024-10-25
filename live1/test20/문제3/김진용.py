n = int(input())

ary = []

for _ in range(n):
    a, b = map(int, input().split())
    ary.append([a, b])

dp = [0]*(n+1)

for i in range(n):
    for j in range(i+ary[i][0], n+1):
        if dp[j] < dp[i] + ary[i][1]:
            dp[j] = dp[i] + ary[i][1]
print(dp[-1])