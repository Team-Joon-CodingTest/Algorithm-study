from heapq import *


def solution(n, k, enemy):
    answer = 0
    enemy_count = 0
    heap = []

    for e in enemy:
        heappush(heap, -e)
        enemy_count += e
        if enemy_count > n:
            if k == 0: break
            enemy_count += heappop(heap)
            k -= 1
        answer += 1
    return answer