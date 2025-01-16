import sys

input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    clothes = {}
    for _ in range(n):
        name, kind = map(str, input().split())
        if kind not in clothes:
            clothes[kind] = []
        clothes[kind].append(name)

    cnt = 1
    for k in clothes.keys():
        cnt *= len(clothes[k]) + 1

    print(cnt - 1)
