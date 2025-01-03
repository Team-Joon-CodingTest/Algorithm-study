import sys

input = sys.stdin.readline

n = int(input())
ranks = []
for _ in range(n):
    ranks.append(int(input()))

res = 0
for real, hope in enumerate(sorted(ranks), start=1):
    res += abs(real - hope)
print(res)


"""
5
1
5
3
1
2
"""