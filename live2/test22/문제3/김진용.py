

# 김지민 임한수 13                                 -> 4
# 1 김지민 9 임한수 15                               -> 3
# 1 3 김지민 7 9 11 임한수 15                     -> 2
# 1 2 3 4 김지민 6 7 8 9 10 11 12 임한수 14 15  -> 1
# 김지민: 5번째, 임한수 13번째
# 3 7
# 2 4
# 김지민: 홀수, 임한수 홀수
# 김지민: 8//2, 임한수: 9//2 + 1
# 김지민: kim//2, 임한수: lim//2 + 1

import sys
input = sys.stdin.readline
r, kim, lim = map(int, input().split())
c = 0
while(True):
    c += 1
    if kim % 2 == 1:
        if kim + 1 == lim:
            print(c)
            break
    elif lim % 2 == 1:
        if lim + 1 == kim:
            print(c)
            break

    if kim % 2 == 1:
        kim = kim // 2 + 1
    else:
        kim = kim // 2

    if lim % 2 == 1:
        lim = lim // 2 + 1
    else:
        lim = lim // 2


