import sys
input = sys.stdin.readline
stk = []


def push(i):
    stk.append(i)


def pop():
    return stk.pop()


def size():
    return len(stk)


def empty():
    if len(stk) == 0:
        return 1
    else:
        return 0


def top():
    return stk[-1]

N = int(input())
for _ in range(N):
    order = input().split()
    order_name = order[0]

    if order_name == "push":
        push(order[1])

    elif order_name == "pop":
        if empty():
            print(-1)
        else:
            print(pop())

    elif order_name == "size":
        print(size())

    elif order_name == "empty":
        print(empty())

    elif order_name == "top":
        if empty():
            print(-1)
        else:
            print(top())