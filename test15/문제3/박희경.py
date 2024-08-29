"""
1. popleft()
2. append(popleft())
3. appendleft(pop())
틀림 (시간부족)
"""
import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())

q = deque([i for i in range(1, n+1)])
index = list(map(int, input().split()))
cnt = 0

for i in range(m):
    idx = index[i]
    if q[0] == idx:
        print(q[0])
        q.popleft()
    else:
        if idx <= len(q)//2:
            print("2번 연선")
            q.append(q.popleft())
            cnt += 1
        else:
            print("3번 연선")
            q.appendleft(q.pop())
            cnt += 1
print(cnt)

