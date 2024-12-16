import sys

input = sys.stdin.readline

n = int(input())
stack = []

for _ in range(n):
    cmd = list(map(int, input().split()))

    if cmd[0] == 1:
        stack.append(cmd[1])
    if cmd[0] == 2:
        if len(stack) == 0:
            print(-1)
        else:
            print(stack.pop())
    if cmd[0] == 3:
        print(len(stack))
    if cmd[0] == 4:
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    if cmd[0] == 5:
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[-1])
