import sys

input = sys.stdin.readline

n, d = map(int, input().split())
shortcuts = []
dp = [i for i in range(d + 1)]

for _ in range(n):
    start, dest, length = map(int, input().split())
    if dest - start > length:  # 지름길인 경우
        shortcuts.append((start, dest, length))

shortcuts.sort()

for start, dest, length in shortcuts:
    for i in range(1, d + 1):
        if i == dest:   # 도착 지점인 경우
            dp[i] = min(dp[start] + length, dp[i])
        else:
            dp[i] = min(dp[i-1] + 1, dp[i])

print(dp[d])