"""
1. popleft()
2. append(popleft())
3. appendleft(pop())
- 접근은 맞았음
"""
import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())

q = deque([i for i in range(1, n+1)])
index = list(map(int, input().split()))
cnt = 0

for idx in index:
    while True:     # 놓친 부분
        if q[0] == idx:
            q.popleft()
            break
        else:
            if q.index(idx) < len(q)/2:    # 큐를 반으로 나눴을 때보다 뽑으려는 인덱스가 작을 때
                while q[0] != idx:  # 놓친 부분. 일치할 때까지 연산 반복
                    # 2번 연산
                    q.append(q.popleft())
                    cnt += 1
            else:
                while q[0] != idx:
                    # 3번 연산
                    q.appendleft(q.pop())
                    cnt += 1
print(cnt)