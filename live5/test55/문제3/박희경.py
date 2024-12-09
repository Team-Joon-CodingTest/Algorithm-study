from collections import *


def solution(k, tangerine):
    answer = 0
    type = defaultdict(int)
    for t in tangerine:
        type[t] += 1
    sorted_type = sorted(type.items(), key=lambda x: x[1], reverse=True)
    cnt = 0
    while cnt <= k:
        for i in range(sorted_type):
            cnt += sorted_type[i][1]
        answer += i

    return answer