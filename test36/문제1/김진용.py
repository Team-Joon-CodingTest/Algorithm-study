import sys

lq = int(input())
lq_ary = list(map(int, input().split()))

lq_ary.sort()

start = 0
end = len(lq_ary) - 1

mini_value = sys.maxsize


result = []
while start < end:
    mix = lq_ary[start] + lq_ary[end]
    if abs(mix) < mini_value:
        mini_value = abs(mix)
        result = [lq_ary[start], lq_ary[end]]
    if mix < 0:
        start += 1
    elif mix > 0:
        end -= 1
    else:
        break

print(result[0], result[1])