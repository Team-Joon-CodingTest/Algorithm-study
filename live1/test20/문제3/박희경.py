"""
참고함
"""
import sys

input = sys.stdin.readline

n = int(input())
arr = []

for _ in range(n):
    arr.append(list((map(int, input().split()))))
    # [[3, 10], [5, 20], [1, 10], [1, 20], [2, 15], [4, 40], [2, 200]]

profit = 0


# 이전 코드
# for i in range(len(arr)-1, -1, -1):
#     # n+1 이상까지 해야하는지
#     if i + arr[i][0] > n:
#         print("i:", i, "n:", n, i + arr[i][0])
#         continue
#     else:
#         profit += arr[i][1]
#         n -= 1
#         print("i:", i, "n:", n, "이익", profit)

def find_max_profit(day, current_profit):
    global profit

    # n일을 넘어가면
    if day >= n:
        # 현재까지의 최대 이익을 갱신
        profit = max(profit, current_profit)
        return

    # 현재 상담을 하지 않고 다음날로 넘어가는 경우
    find_max_profit(day + 1, current_profit)

    # 현재 상담을 하는 경우
    if day + arr[day][0] <= n:  # 상담이 퇴사 전까지 끝나는 경우에만
        find_max_profit(day + arr[day][0], current_profit + arr[day][1])


find_max_profit(0, 0)

print(profit)
