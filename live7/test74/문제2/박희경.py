import sys

input = sys.stdin.readline


def cantor_set(arr, start, end):    # (놓친 부분) 파라미터로 start, end 두는 것
    length = end - start
    idx = length // 3  # 중심 인덱스
    if length == 1:
        return

    for i in range(idx, idx * 2):
        arr[start + i] = ' '

    cantor_set(arr, start, start + idx)  # 남은 왼쪽
    cantor_set(arr, start + idx * 2, end)  # 남은 오른쪽


while True:
    try:
        n = int(input())
        arr = ['-' for _ in range(3 ** n)]

        cantor_set(arr, 0, len(arr))
        print(''.join(arr))
    except:
        break

"""
0
1
3
2
"""
