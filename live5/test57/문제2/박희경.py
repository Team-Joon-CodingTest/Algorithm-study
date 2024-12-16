import sys
from collections import *

input = sys.stdin.readline

n, m = map(int, input().split())
pick = list(map(int, input().split()))

q = deque([i for i in range(1, n + 1)])

cnt = 0


for p in pick:
    while True:
        if q[0] == p:   # 맨 앞에 있다면 다음
            q.popleft()
            break
        else:
            # 2번 왼쪽으로 한칸 이동
            if q.index(p) < len(q) // 2:
                while q[0] != p:
                    q.append(q.popleft())
                    cnt += 1
            # 3번 오른쪽으로 한칸 이동
            else:
                while q[0] != p:
                    q.appendleft(q.pop())
                    cnt += 1

print(cnt)

"""
10 3
1 2 3

10 3
2 9 5
"""
