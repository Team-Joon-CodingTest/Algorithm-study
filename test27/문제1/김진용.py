import sys
input = sys.stdin.readline
N = int(input())

ary = []
for i in range(N):
    ary.append(list(map(int, input().split())))
result = [1 for i in range(N)]
for i in range(N):
    for j in range(N):
        if i == j:
            continue
        result[i] |= ary[i][j]
        # print(i, j)
        # print(ary[i][j])
        # print(result)

print(*result)