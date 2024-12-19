import sys
from collections import *

input = sys.stdin.readline

n = int(input())
dic = {}
q = deque(enumerate(map(int, input().split())))

res = []
while q:
    idx, paper = q.popleft()
    res.append(idx + 1)

    # 오른쪽으로 이동
    if paper > 0:
        q.rotate(-(paper - 1))
    else:  # 왼쪽으로 이동
        q.rotate(-paper)
print(*res)
"""
5
3 2 1 -3 -1
"""