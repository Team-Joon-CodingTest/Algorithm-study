import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)
t = int(input())


def travel(contry, cnt):
    visited[contry] = 1

    for i in ary[contry]:
        if visited[i] == 0:
            cnt = travel(i, cnt + 1)
    return cnt


for _ in range(t):
    n, m = map(int, input().split())
    ary = [[] for _ in range(1, n + 1 + 1)]
    visited = [0] * (n + 1 + 1)
    for _ in range(m):
        a, b = map(int, input().split())
        ary[a].append(b)
        ary[b].append(a)
    print(travel(1, 0))
