import sys
from collections import *

input = sys.stdin.readline


def is_cycle(x):
    global cnt
    visited[x] = 1
    nx = arr[x]  # 다음 방문
    if not visited[nx]:
        is_cycle(nx)


t = int(input())
for _ in range(t):
    n = int(input())
    arr = [0] + list(map(int, input().split()))
    cnt = 0
    visited = [0] * (n + 1)

    for i in range(1, n + 1):
        if not visited[i]:
            is_cycle(i)
            cnt += 1

    print(cnt)
