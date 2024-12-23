import sys
from collections import *

input = sys.stdin.readline

s = list(input().rstrip())
left_stack = deque(s)
right_stack = deque()
m = int(input())

for _ in range(m):
    command = input().split()

    if command[0] == 'L' and left_stack:
        right_stack.appendleft(left_stack.pop())

    elif command[0] == 'D' and right_stack:
        left_stack.append(right_stack.popleft())

    elif command[0] == 'B' and left_stack:
        left_stack.pop()

    elif command[0] == 'P':
        left_stack.append(command[1])

print(''.join(left_stack) + ''.join(right_stack))
