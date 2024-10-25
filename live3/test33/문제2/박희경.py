import sys

input = sys.stdin.readline

n = int(input())
budget = list(map(int, input().split()))
m = int(input())


def get_budget(limit):
    total = 0
    for b in budget:
        if b >= limit:
            total += limit
        else:
            total += b
    return total


def binary_search(arr, target):
    start = 0
    end = max(arr)

    while start <= end:
        mid = (start + end) // 2
        total_budget = get_budget(mid)
        if total_budget <= target:  # 상한액을 높일 필요가 있음
            start = mid + 1
        else:
            end = mid - 1
    return end


print(binary_search(budget, m))
