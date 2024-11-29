import sys

input = sys.stdin.readline

t = int(input())
for _ in range(t):
    k, w = map(str, input().split())
    k = int(k)

    start, end = 0, k
    arr = set()
    res = []
    while True:
        if end == len(w) - 1:
            break

        arr.add(w[start:end])
        start += 1
        end += 1

    for a in arr:
        res.append(sorted(a))

    # 많은 문자열 반환