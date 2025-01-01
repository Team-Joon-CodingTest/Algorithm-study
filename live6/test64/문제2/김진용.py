import sys
input = sys.stdin.readline

N, K = map(int,input().split())
ary = []
max_l = -1

for _ in range(N):
    g, x = map(int, input().split())
    max_l = max(max_l, x)
    ary.append([g, x])

ary_2 = [0] * (max_l+1)

for a in ary:
    ary_2[a[1]] = a[0]

start = 0
end = K*2 + 1
max_ary = -1


sum_f = sum(ary_2[start:end])
max_ary = max(max_ary, sum_f)
while end < len(ary_2):
    sum_f -= ary_2[start]
    sum_f += ary_2[end]
    max_ary = max(max_ary, sum_f)
    start += 1
    end += 1
print(max_ary)
