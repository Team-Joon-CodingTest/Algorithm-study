import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
b = deque(enumerate(map(int, input().split()))) # deque에 인덱스와 종이값이 묶여서 하나의 원소로 저장됨
ans = []

while b:
    index, paper = b.popleft()
    ans.append(index + 1)

    if paper > 0:
        b.rotate(-(paper -1)) # 양수이므로 오른쪽으로 이동
    elif paper <0:
        b.rotate(-paper) # 음수이므로 왼쪽으로 이동

print(' '.join(map(str, ans)))