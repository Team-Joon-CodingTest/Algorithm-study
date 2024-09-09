import sys
input = sys.stdin.readline

n = int(input())
ary = []
for _ in range(n):
    ary.append(list(input()))
# print(ary)
def check(a):
    mcnt = 1
    for i in range(n):
        cnt = 1
        for j in range(1, n):
            if a[i][j-1] == a[i][j]:
                cnt += 1
            else:
                cnt = 1
            mcnt = max(mcnt, cnt)

        cnt = 1
        for j in range(1, n):
            if a[j][i-1] == a[j][i]:
                cnt += 1
            else:
                cnt = 1
            mcnt = max(mcnt, cnt)

    return mcnt
m = 0
for i in range(n):
    for j in range(n):
        if i + 1 < n:
            ary[i][j], ary[i+1][j] = ary[i+1][j], ary[i][j]
            m = max(m, check(ary))
            ary[i][j], ary[i+1][j] = ary[i+1][j], ary[i][j]
        if j + 1 < n:
            ary[i][j], ary[i][j+1] = ary[i][j+1], ary[i][j]
            m = max(m, check(ary))
            ary[i][j], ary[i][j+1] = ary[i][j+1], ary[i][j]

print(m)