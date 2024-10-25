import sys

input = sys.stdin.readline

test = int(input())

stk = []

for t in range(test):
    o = list(map(int, input().split()))

    if len(o) > 1:
        a, b = o[0], o[1]
    else:
        a = o[0]

    if a == 1:  # 1번 명령이라면
        stk.append(b)
    elif a == 2:
        if len(stk):
            print(stk.pop())
        else:
            print(-1)
    elif a == 3:
        print(len(stk))
    elif a == 4:
        if len(stk) > 0:
            print(0)
        else:
            print(1)
    elif a == 5:
        if len(stk) > 0:
            print(stk[-1])
        else:
            print(-1)