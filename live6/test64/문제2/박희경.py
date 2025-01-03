import sys

input = sys.stdin.readline

n, k = map(int, input().split())
g = []
x = []

for _ in range(n):
    a, b = map(int, input().split())
    g.append(a)
    x.append(b)


bucket = [0] * (max(x) + 1)
for i in range(n):
    bucket[x[i]] = g[i]

# [0, 5, 2, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 10]
start, end = 0, k*2+1
ice = max_ice = sum(bucket[start:end+1])

while end < len(bucket) - 1:
    end += 1
    ice += bucket[end]
    ice -= bucket[start]
    start += 1

    max_ice = max(max_ice, ice)

print(max_ice)