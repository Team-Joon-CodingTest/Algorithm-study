import sys
input = sys.stdin.readline
N = int(input())

ary = []
for i in range(N):
    ary.append(list(map(int, input().split())))
result = [0 for i in range(N)]
for i in range(N):
    for j in range(N):
        if i == j:
            continue
        result[i] |= ary[i][j]

print(*result)