import sys
input = sys.stdin.readline

n = int(input())
m = [list(map(int, input().split())) for i in range(n)]
ans = [0 for i in range(n)]

for i in range(n):
    for j in range(n):
        if i == j:
            continue
        ans[i] |= m[i][j]

print(*ans)