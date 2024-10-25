import sys

input = sys.stdin.readline

n = int(input())
rome = ['I', 'V', 'X', 'L']
cnt = 0
stack = []


def bt(depth):
    global cnt
    if depth == n:
        print(*stack)
        cnt += 1
        # return cnt
    for i in range(n):
        if rome[i] not in stack:
            stack.append(rome[i])
            bt(depth + 1)
            stack.pop()


bt(0)
