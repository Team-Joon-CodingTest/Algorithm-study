import sys
import math

input = sys.stdin.readline

n = int(input())
values = list(map(int, input().split()))

values.sort()
start = 0
end = n - 1
min_diff = float('inf')
answer = ()

while start < end:
    sum = values[start] + values[end]
    diff = abs(sum)

    if diff < min_diff:
        min_diff = diff
        answer = (values[start], values[end])

    if sum == 0:
        break
    elif sum > 0:
        end -= 1
    else:
        start += 1

print(*answer)