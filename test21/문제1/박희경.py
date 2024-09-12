"""
병합 정렬 모르겠어서 답 봄
"""
import sys

input = sys.stdin.readline

n, k = map(int, input().split())

a = list(map(int, input().split()))
cnt = 0
res = -1


def merge(arr, start, mid, end):
    global cnt, res
    i, j = start, mid + 1
    tmp = []
    while i <= mid and j <= end:
        if arr[i] <= arr[j]:
            tmp.append(arr[i])
            i += 1
        else:
            tmp.append(arr[j])
            j += 1
    while i <= mid:
        tmp.append(arr[i])
        i += 1
    while j <= end:
        tmp.append(arr[j])
        j += 1

    i = start
    t = 0
    while i <= end:
        arr[i] = tmp[t]
        cnt += 1
        if cnt == k:
            res = arr[i]
            break
        i += 1
        t += 1


def merge_sort(arr, start, end):
    if start < end:
        mid = (start + end) // 2
        merge_sort(arr, start, mid)
        merge_sort(arr, mid + 1, end)
        merge(arr, start, mid, end)


merge_sort(a, 0, n - 1)
print(res)
