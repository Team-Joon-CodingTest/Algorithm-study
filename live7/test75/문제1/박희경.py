import sys

input = sys.stdin.readline

n, m = map(int, input().split())
info = list(map(int, input().split()))
spy = list(map(int, input().split()))

progress = list(zip(info, spy))  # [(4, 2), (2, 4), (4, 4)]
cnt = 0


def spy(day, cur, prev):
    global cnt
    if day == n:
        if cur >= m:
            cnt += 1
        return
    for i in range(2):
        for j in range(3):
            next = cur
            if j == prev:
                next += progress[j][i] // 2
            else:
                next += progress[j][i]
            spy(day + 1, next, j)


spy(0, 0, -1)
print(cnt)
