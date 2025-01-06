import sys

input = sys.stdin.readline

n, k = map(int, input().split())
coin = []
for _ in range(n):
    coin.append(int(input()))

coin = sorted(coin, reverse=True)
res = 0
for i in range(n):
    if k // coin[i] > 0:
        res += k // coin[i]
        k %= coin[i]

print(res)
