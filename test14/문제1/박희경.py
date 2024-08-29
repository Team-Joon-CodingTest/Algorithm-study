"""
1차 시도: 출력 초과
2차 시도: 왼/오 스택 나눠서 출력
"""
import sys
from collections import deque

input = sys.stdin.readline

left_stack = deque(list(input().rstrip()))
right_stack = deque()
m = int(input())

for _ in range(m):
    cmd = input().split()

    if cmd[0] == 'L' and left_stack:    # 커서가 맨 앞 x
        right_stack.appendleft(left_stack.pop())    # 왼쪽 스택에서 하나 빼낸 값을 오른쪽 스택 앞에 저장
    elif cmd[0] == 'D' and right_stack:
        left_stack.append(right_stack.popleft())
    elif cmd[0] == 'B' and left_stack:
        left_stack.pop()
    elif cmd[0] == 'P':
        left_stack.append(cmd[1])

print(''.join(left_stack) + ''.join(right_stack))
