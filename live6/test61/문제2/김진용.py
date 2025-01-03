import sys
input = sys.stdin.readline

n, m = map(int, input().split())

ary = list(map(int, input().split()))

s = 0

sum_i = [0]

for i in ary:
    s += i
    sum_i.append(s)
# print(sum_i)

for _ in range(m):
    a, b = map(int, input().split())
    print(sum_i[b] - sum_i[a-1])

