import sys
input = sys.stdin.readline

n, k = map(int, input().split())
ary = []
for _ in range(n):
    ary.append(int(input()))

ary.sort(reverse=True)
cnt = 0
i = 0
while k != 0 and i < len(ary):
    if ary[i] <= k:
        cnt += k//ary[i]
        k %= ary[i]
    i += 1
print(cnt)