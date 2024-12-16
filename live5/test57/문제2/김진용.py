from collections import deque

n, m = map(int, input().split())

ary = deque([i for i in range(1, n+1)])

suction = list(map(int, input().split()))

# print(ary, suction)

min_rotate = 0

for s in suction:
    right_rotate = 0
    left_rotate = 0

    while ary[0] != s:
        ary.rotate(1)
        right_rotate += 1

    left_rotate = len(ary) - right_rotate
    ary.popleft()

    min_rotate += min(right_rotate,left_rotate)

print(min_rotate)
