import sys

input = sys.stdin.readline

n = int(input())
piano = [0] + list(map(int, input().split()))
q = int(input())

miss = [0] * (n + 1)
for i in range(n):
    if piano[i] > piano[i + 1]:
        miss[i] = 1

prefix_sum = [0] * (n + 1)
prefix_sum[0] = miss[0]
for i in range(1, n + 1):
    prefix_sum[i] = miss[i] + prefix_sum[i - 1]

for _ in range(q):
    x, y = map(int, input().split())

    print(prefix_sum[y - 1] - prefix_sum[x - 1])


"""
9
1 2 3 3 4 1 10 8 1
5
1 3
2 5
4 7
9 9
5 9
"""