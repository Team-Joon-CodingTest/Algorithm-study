import sys

input = sys.stdin.readline

k, n = map(int, input().split())
cables = []
for _ in range(k):
    cables.append(int(input()))


# k개 랜선 자른 값으로 개수 구하는 함수
def cable_count(mid, cables):
    cnt = 0
    for cable in cables:
        cnt += (cable // mid)
    # mid = 401일 때 cnt = 5
    # mid = 200일 때 cnt = 11
    return cnt


def binary_search(cables, target):
    start = 1  # 최소 자를 수 있는 길이
    end = max(cables)  # 가지고 있는 랜선 중 최대 길이 (e.g. 802)

    while start <= end:
        mid = (start + end) // 2  # 401
        cnt = cable_count(mid, cables)  # 5

        if cnt < target:  # 더 작게
            end = mid - 1  # end = 400
        else:
            start = mid + 1
    return end


result = binary_search(cables, n)
print(result)
