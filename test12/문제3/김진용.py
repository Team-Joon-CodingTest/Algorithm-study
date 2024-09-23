import sys
import heapq    # 기본적으로 최소힙임

n = int(sys.stdin.readline())
heap = []
for i in range(n):
    x = int(sys.stdin.readline())
    if x > 0:
        heapq.heappush(heap, -x)    # 음수 붙여서 넣어주면 최대 힙으로 변환 가능
    elif x == 0:
        if len(heap) == 0:
            print(0)
        else:
            print(-(heapq.heappop(heap)))   # 제일 값이 작은 음수에 다시 음수 붙여버리면 됨