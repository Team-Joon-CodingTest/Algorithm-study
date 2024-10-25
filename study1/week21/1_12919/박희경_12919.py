"""

"""
import sys

input = sys.stdin.readline

s = input().strip()
t = input().strip()


def dfs(target):
    if target == s:
        print(1)
        exit()
    if len(s) > len(target):
        return
    if target[-1] == 'A':
        dfs( target[:-1])
    if target[0] == 'B':
        dfs(target[1:][::-1])


if dfs(t) is None:
    print(0)
