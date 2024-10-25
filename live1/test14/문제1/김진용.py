# sys.stdin.readline 쓰면 성능?이 더 좋아지는거는 알고있긴 했는데
# 왜 input 쓸 때는 시간초과 나고 sys쓰면은 왜 시간초과가 안 나는지 궁금하네요..

import sys

s = list(sys.stdin.readline().rstrip())
s2 = []
c = len(s)

test = int(sys.stdin.readline())
for t in range(test):
    a = list(sys.stdin.readline().split())

    if a[0] == 'P':
        s.append(a[1])
    elif a[0] == 'L':
        if s:
            s2.append(s.pop())
    elif a[0] == 'D':
        if s2:
            s.append(s2.pop())
    elif a[0] == 'B':
        if s:
            s.pop()
s.extend(reversed(s2))
print(''.join(s))