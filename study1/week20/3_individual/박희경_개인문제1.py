"""
이코테: 고정점 찾기
"""
import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))


def binary_search(arr, start, end):
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == mid:
            return mid
        elif arr[mid] > mid:
            end = mid - 1
        else:
            start = mid + 1
    return -1


result = binary_search(arr, 0, n - 1)
print(result)

"""
[input 1]
5
-15 -6 1 3 7
[input 2]
7
-15 -4 2 8 9 13 15
[input 3]
7
-15 -4 3 8 9 13 15
"""
