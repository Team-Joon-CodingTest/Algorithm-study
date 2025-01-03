import sys

input = sys.stdin.readline

n = int(input())
schedule = [[0, 0]]
for _ in range(n):
    schedule.append(list(map(int, input().split())))

profit = 0


def find_max_profit(day, current_profit):
    global profit

    # n일 넘어가면 최대이익 갱신
    if day > n:
        profit = max(profit, current_profit)
        return

    # 상담하지 않는 경우
    find_max_profit(day + 1, current_profit)

    if day + schedule[day][0] - 1 <= n:
        find_max_profit(day + schedule[day][0], current_profit + schedule[day][1])


find_max_profit(1, 0)
print(profit)

"""
7
3 10
5 20
1 10
1 20
2 15
4 40
2 200
"""
