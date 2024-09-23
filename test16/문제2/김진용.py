import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
ary = []
number = list(map(int, input().split()))

for i in range(n):
    ary.append((i+1, number[i]))

ary = deque(ary)
stack = []
while ary:
    t = ary.popleft()
    stack.append(t[0])
    # print(t[1])
    if t[1] > 0:
        ary.rotate(-(t[1] - 1)) # 뽑힌 부분 제외하고 왼쪽으로 회전
    else:
        ary.rotate(-t[1])       # 그냥 오른쪽 회전

print(*stack)