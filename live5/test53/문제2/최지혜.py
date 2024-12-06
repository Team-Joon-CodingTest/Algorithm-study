import sys
import heapq
n = int(sys.stdin.readline())


heap = []
for _ in range(n):
    num = int(sys.stdin.readline().strip())
    if num != 0:
        heapq.heappush(heap, -num) # 최대 힙을 구기 위해서 음수로 저장
    else:
        if len(heap) == 0:
            print(0)
        else:
            print(-heapq.heappop(heap)) # 출력할 땐 음수로 저장된 값을 다시 원래 값으로 되돌려서 출력