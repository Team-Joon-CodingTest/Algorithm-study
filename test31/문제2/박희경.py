import sys

input = sys.stdin.readline

n = int(input())
cards = list(map(int, input().split()))  # 상근이가 가지고 있는 숫자카드

m = int(input())
is_card = list(map(int, input().split()))

sorted(cards)


def binarySearch(start, end, target):
    mid = (start + end) // 2
    if mid == target:
        return mid
    elif mid > target:
        end = mid + 1
        binarySearch(start, end, target)

    elif mid < target:
        start = mid + 1
        binarySearch(start, end, target)


for c in is_card:
    if binarySearch(0, len(cards)-1, c):
        c = 1
    else:
        c = 0

print(*is_card)
