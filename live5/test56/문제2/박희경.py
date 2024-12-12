import sys
from collections import *

input = sys.stdin.readline

n = int(input())
cards = list(i for i in range(1, n + 1))
q = deque(cards)    # queue [1, 2, 3, 4, 5, 6, 7]

while q:
    print(q.popleft())  # 맨 위에 카드 출력 (큐에선 첫번째 값)
    if q:
        top = q.popleft()
        q.append(top)
