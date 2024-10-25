from bisect import bisect_left, bisect_right


def count_by_range(array, left_values, right_values):
    right_values = bisect_right(array, right_values)
    left_values = bisect_left(array, left_values)
    return right_values - left_values


N, x = map(int, input().split())
array = list(map(int, input().split()))

cnt = count_by_range(array, x, x)

if cnt == 0:
    print(-1)
else:
    print(cnt)


"""
7 2
1 1 2 2 2 2 3
"""