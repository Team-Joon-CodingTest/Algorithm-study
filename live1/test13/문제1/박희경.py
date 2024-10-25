"""
9 1 1 1 1(v) 1
가장 높은 우선순위가 있다면 앞에 문서 맨 뒤로
"""
import sys
from collections import deque

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n, m = map(int, input().split())
    queue = deque(map(int, input().split()))
    cnt = 0

    while queue:
        priority = max(queue)
        first = queue.popleft()  # 큐 맨 앞에 있는 값 빼기
        m -= 1  # 뺏으니까 한 칸 당기기

        if first == priority:
            cnt += 1  # 문서 출력 됐으니 카운팅
            if m < 0:
                print(cnt)
                break

        # 우선순위가 높은 문서가 아닐 때
        else:
            queue.append(first)  # 맨 뒤에 저장
            if m < 0:
                m = len(queue) - 1
