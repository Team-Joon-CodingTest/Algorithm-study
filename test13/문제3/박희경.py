import sys

input = sys.stdin.readline

n = int(input())
user = set()

for _ in range(n):
    chat = input()

    if chat == "ENTER":
        user.clear()
    else:
        user.add(chat)

print(user)
print(len(user))
