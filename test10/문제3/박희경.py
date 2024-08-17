import sys

input = sys.stdin.readline

t = int(input())

dict = {}
for _ in range(t):
    message = input().strip()
    message = list(message)
    key = sorted(set(message))

    count = 0
    for k in key:
        dict[k] = 0

    for m in message:
        dict[m] += 1

    for value in dict.values():  # 다시 확인할 부분
        if value % 3 == 0:
            print("FAKE")
        else:
            print("OK")
