import sys
input = sys.stdin.readline

n, m = map(int, input().split())

ary = list(map(int, input().split()))

start = 0
end = max(ary)
result = 0
while start <= end:
    mid = (start + end) // 2

    total = 0

    for i in ary:
        if i - mid > 0:
            total += (i - mid)
    # 자른 나무 총 합이 가져가려고 하는 나무의 길이보다 크거나 같다면??
    if total >= m:
        result = mid
        start = mid + 1
    else:
        end = mid - 1

print(result)