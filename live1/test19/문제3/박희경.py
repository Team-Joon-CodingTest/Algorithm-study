import sys

input = sys.stdin.readline

n = int(input())
rank = []

for _ in range(n):
    rank.append(int(input()))

rank.sort()  # [1, 1, 2, 3, 5]
diff = 0

for i in range(len(rank)):
    if rank[i] != i + 1:
        diff += abs((i + 1) - rank[i])
print(diff)
