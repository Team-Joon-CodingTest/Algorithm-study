"""
1. 맨 위에 있는 카드 버리고
2. 맨 위에 있는 카드 내리고
큐 이용
"""
import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
cards = list(i for i in range(1, n + 1))

q = deque(cards)
result = []

while q:
    card = q.popleft()
    result.append(card)
    if len(q) > 1:
        q.append(q.popleft())
print(*result)