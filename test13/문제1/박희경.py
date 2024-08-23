"""
9 1 1 1 1(v) 1
가장 높은 우선순위가 있다면 앞에 문서 맨 뒤로
"""
import sys
from collections import deque

input = sys.stdin.readline

t = int(input())

# 중요도가 높은 문서의 인덱스 구하기
# def find_idx(priority, queue):
#     while queue:
#         document = queue.popleft()
#         if document < property:
#             queue.append(document)
#         elif document == property:
#             return

for _ in range(t):
    n, m = map(int, input().split())
    queue_list = list(map(int, input().split()))
    queue = deque(queue_list)

    queue_list[m]
    # priority = max(queue)


