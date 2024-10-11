import sys

input = sys.stdin.readline


def binary_search(arr, target):
    start = 0
    end = len(arr) - 1

    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            return 1
        elif arr[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return 0


t = int(input())
for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split()))

    arr.sort()  # [-4, -1, 0, 2, 4]

    cnt = 0

    for i in range(n - 1):
        for j in range(i + 1, n):
            dist = abs(arr[j] - arr[i])  # 두 점 사이의 거리
            if binary_search(arr, arr[j] + dist): # 마지막 한 점 있는지 (맨 오른쪽 점)
                cnt += 1
    print(cnt)
