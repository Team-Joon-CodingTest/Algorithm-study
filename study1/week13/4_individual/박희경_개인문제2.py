N, M = map(int, input().split())
high = list(map(int, input().split()))

start = 0
end = max(high)

result = 0
while start <= end:
    total = 0
    mid = (start + end) // 2
    for i in high:
        if i > mid:
            total += i - mid
    if total < M:
        end = mid - 1
    else:
        result = mid
        start = mid + 1

print(result)

"""
4 6
19 15 10 17
"""