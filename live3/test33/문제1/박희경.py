import sys

input = sys.stdin.readline

n, m = map(int, input().split())
trees = list(map(int, input().split()))


def get_wood(height):
    total = 0
    for tree in trees:
        if tree >= height:
            total += (tree - height)
    return total


def binary_search(arr, target):
    start = 0
    end = max(arr)
    while start <= end:
        mid = (start + end) // 2  # 10
        wood = get_wood(mid)
        if wood < target:  # 높이를 더 낮춰야 함
            end = mid - 1
        else:
            start = mid + 1
    return end


print(binary_search(trees, m))
