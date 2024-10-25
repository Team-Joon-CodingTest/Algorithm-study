N, M = map(int, input().split())
ary = [0] + list(map(int, input().split()))

def bt(location, size, time):
    global result

    if time > M:
        return

    if time <= M:
        result = max(result, size)

    if location <= N - 1:
        bt(location + 1, size + ary[location + 1], time + 1)

    if location <= N - 2:
        bt(location + 2, (size // 2) + ary[location + 2], time + 1)


result = 0
bt(0, 1, 0)
print(result)