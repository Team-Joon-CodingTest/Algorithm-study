'''
[이분탐색]
오름차순 정렬 이후에 이분탐색 시행
'''
import sys

N = int(sys.stdin.readline())
budgets = list(map(int, sys.stdin.readline().split()))
M = int(sys.stdin.readline())

budgets.sort()

max = budgets[-1]
min = 0


while(min <= max):
    limit = (max + min) // 2
    sum = 0

    for budget in budgets:
        if budget <= limit:
            sum += budget
        else:
            sum += limit

    if sum > M:
        max = limit - 1
    else:
        min = limit + 1

print(max)