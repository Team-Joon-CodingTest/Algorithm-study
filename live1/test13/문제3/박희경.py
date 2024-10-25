import sys

input = sys.stdin.readline

n = int(input())
user = set()
cnt = 0

for _ in range(n):
    chat = input().strip()

    if chat == "ENTER":
        cnt += len(user)
        user.clear()
    else:
        user.add(chat)

cnt += len(user)
print(cnt)