import sys
input = sys.stdin.readline
n = int(input())
ary = list(map(int, input().split()))
m = int(input())
p = [0]

t = 0

for i in ary:
    t += i
    p.append(t)

for _ in range(m):
    a, b = map(int, input().split())
    print(p[b] - p[a-1])