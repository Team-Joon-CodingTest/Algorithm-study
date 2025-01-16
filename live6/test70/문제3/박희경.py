from collections import *


def solution(priorities, location):
    answer = 0
    # 참고한 부분 (딕셔너리인데 순서가 필요하다면 enumerate 고려하기!!!!)
    queue = deque([(i, p) for i, p in enumerate(priorities)])

    while queue:
        index, priority = queue.popleft()

        # 참고한 부분 (any: 하나라도 True면 True 반환)
        if any(priority < q[1] for q in queue):
            queue.append((index, priority))
        else:
            answer += 1
            if index == location:
                return answer
