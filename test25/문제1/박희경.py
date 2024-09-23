import sys

input = sys.stdin.readline


def cantor(arr, start, end):
    length = end - start
    if length == 1:
        return
    idx = length // 3   # 중심 인덱스
    arr[start + idx:start + idx*2] = [' '] * idx    # 공백으로 바꾸기

    cantor(arr, start, start + idx)
    cantor(arr, start + idx*2, end)


while True:
    try:
        n = int(input())
        arr = ['-' for _ in range(3 ** n)]

        cantor(arr, 0, len(arr))
        print(''.join(arr))
    except:
        # 파일의 끝을 만나면 루프 종료
        break
