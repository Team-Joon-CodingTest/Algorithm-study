import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
balloons = deque(enumerate(map(int, input().split()), start=1))  # 풍선 순서와 종이 값

res = []
while balloons:
    idx, paper = balloons.popleft()
    res.append(idx)

    if paper > 0:   # 양수면 왼쪽 회전 / 오른쪽으로 이동
        balloons.rotate(-(paper-1))
    elif paper < 0:
        balloons.rotate(-paper)
print(*res)