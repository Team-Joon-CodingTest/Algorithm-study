import sys
input = sys.stdin.readline

N = int(input())
s_ary = list(map(int, input().split()))
s_ary.sort()

M = int(input())
cs_ary = list(map(int, input().split()))

def search(t):
    start = 0                   # 시작 값
    end = len(s_ary) - 1           # 끝 값

    while start <= end:
        mid = (start + end) // 2  # 중간 값

        if s_ary[mid] == t:
            return 1
        elif s_ary[mid] < t:
            start = mid + 1
        else:
            end = mid - 1

    return 0

ary = []

for i in cs_ary:
    ary.append(search(i))

print(*ary)