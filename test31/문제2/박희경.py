import sys

input = sys.stdin.readline

n = int(input())
cards = list(map(int, input().split()))  # 상근이가 가지고 있는 숫자카드

m = int(input())
is_card = list(map(int, input().split()))
cards.sort()


def binarySearch(arr, target):
    start, end = 0, n-1
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            return arr[mid]
        elif arr[mid] > target:
            end = mid - 1
        else:
            start = mid + 1


for i in range(len(is_card)):
    if binarySearch(cards, is_card[i]):
        is_card[i] = 1
    else:
        is_card[i] = 0

print(*is_card)
