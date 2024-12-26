import sys
input = sys.stdin.readline

n = int(input())
akvo = list(map(int, input().split()))

mistake_s = 0
dp = [0]*(n+1)
for i in range(n):
    if akvo[i] < akvo[i-1]:
        mistake_s += 1

    dp[i] = mistake_s

q = int(input())

for _ in range(q):
    x, y = map(int, input().split())

    if x == y:
        print(0)
    else:
        print(dp[y-1] - dp[x-1])
