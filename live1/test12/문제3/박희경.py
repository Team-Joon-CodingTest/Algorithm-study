"""
힙: 우선순위 큐를 위해 만들어진 자료구조. 완전 이진트리의 일종
최대힙: 부모의 노드의 값이 자식 노드의 값보다 크거나 같다.

heapq: 최소 힙만 제공
최대 힙으로 구현하기 위해서
1. heap에 넣는 item을 음수로 변환하여 추가하고
2. 가장 작은 값부터 양수로 바꿔 새로운 힙에 추가한다.
"""
import sys
import heapq

input = sys.stdin.readline

n = int(input())
heap = []

for _ in range(n):
    x = int(input())

    if x == 0:  # 배열에서 가장 큰 값 출력 (최대 힙으로 구현하고 첫번째 값 리턴)
        if len(heap) == 0:
            print(0)
        else:
            print(-(heapq.heappop(heap)))

    heapq.heappush(heap, -x)