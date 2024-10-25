import sys
input = sys.stdin.readline
n, m = map(int, input().split())
ary = list(map(int, input().split()))

p = [0]

t = 0

for i in ary:
    t += i
    p.append(t)

for _ in range(m):
    a, b = map(int, input().split())
    print(p[b] - p[a-1])