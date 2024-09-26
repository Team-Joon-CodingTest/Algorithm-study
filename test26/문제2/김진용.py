import sys

input = sys.stdin.readline

n, m = map(int, input().split())

ary = []

ary.append(list(map(int, input().split())))
ary.append(list(map(int, input().split())))
result = 0


def dfs(day, sum, prev):
    global result
    if day == n:
        if sum >= m:
            result+=1
        return

    for i in range(2):
        for j in range(3):
            nsum = sum
            if j == prev:
                nsum += ary[i][j]//2
            else:
                nsum += ary[i][j]
            dfs(day + 1, nsum, j)


dfs(0, 0, -1)


print(result)