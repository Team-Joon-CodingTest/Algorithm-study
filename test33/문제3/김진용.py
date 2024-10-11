import sys
input = sys.stdin.readline
t = int(input())

def binary_search(target):
    start = 0
    end = len(ary) - 1

    while start <= end:
        mid = (start + end) // 2
        if ary[mid] == target:
            return True
        elif ary[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return False


for _t in range(t):
    n = int(input())
    ary = list(map(int, input().split()))

    ary.sort()  # 정렬

    cnt = 0

    for i in range(len(ary) - 1):
        for j in range(i + 1, len(ary)):
            d = abs(ary[j] - ary[i])    # 첫 번째 점, 두 번째 점 간 거리 구하기
            if binary_search(ary[j] + d):
                cnt += 1
    print(cnt)