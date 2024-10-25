import sys

input = sys.stdin.readline

n, m = map(int, input().split())
a = [0] + list(map(int, input().split()))

result = 0


def roll(time, snow, idx):
    global result

    if time > m:
        return

    if time <= m:
        result = max(result, snow)

    # 첫번째 방법
    if idx <= n - 1:
        roll(time + 1, snow + a[idx + 1], idx + 1)

    # 두번째 방법
    if idx <= n - 2:
        roll(time + 1, (snow // 2) + a[idx + 2], idx + 2)


roll(0, 1, 0)
print(result)
