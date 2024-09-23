"""
dfs
"""
import sys

input = sys.stdin.readline

n = int(input())
a, b = map(int, input().split())
r = int(input())

relation = [[] for _ in range(n + 1)]
for _ in range(r):
    x, y = map(int, input().split())
    relation[x].append(y)
    relation[y].append(x)

flag = False
visited = [0 for _ in range(n+1)]


def dfs(x, count):
    global flag
    visited[x] = 1
    if x == b:
        flag = True
        print(count)
    for i in relation[x]:
        if visited[i] == 0:
            dfs(i, count + 1)


dfs(a, 0)
if not flag:
    print(-1)
