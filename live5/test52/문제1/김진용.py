n, m = map(int, input().split())

days = list(map(int, input().split()))

start = 0
end = m - 1

money = sum(days[start:end])
# print(money)
real_max_money = 0
while end < len(days):
    money += days[end]
    # print(money)
    real_max_money = max(real_max_money, money)
    money -= days[start]
    start += 1
    end += 1
print(real_max_money)
