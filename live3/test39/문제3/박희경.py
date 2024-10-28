import sys

input = sys.stdin.readline

n = int(input())
rome = [1, 5, 10, 50]
cnt = 0
sum_list = set()
stack = []


def bt(depth, start):
    if depth == n:
        sum_list.add(sum(stack))
        return
    for i in range(start, len(rome)):    # 1, 5 / 5, 1 이렇게 중복 계산을 안 하도록 start 지정 해야 함
        stack.append(rome[i])
        bt(depth + 1, i)
        stack.pop()


bt(0, 0)
print(len(sum_list))
