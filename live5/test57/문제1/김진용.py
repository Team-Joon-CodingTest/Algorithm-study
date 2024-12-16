import sys
input = sys.stdin.readline
o = int(input())
stk = []


def push_num(x):
    stk.append(x)


def peek_pop_print():
    if stk:
        print(stk.pop())
    else:
        print(-1)


def total_size():
    print(len(stk))


def is_empty():
    if not stk:
        print(1)
    else:
        print(0)


def peek_print():
    if stk:
        print(stk[-1])
    else:
        print(-1)


for _ in range(o):
    order_list = list(map(int, input().split()))

    if order_list[0] == 1:
        push_num(order_list[1])
    if order_list[0] == 2:
        peek_pop_print()
    if order_list[0] == 3:
        total_size()
    if order_list[0] == 4:
        is_empty()
    if order_list[0] == 5:
        peek_print()
