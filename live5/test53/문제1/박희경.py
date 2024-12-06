import sys

input = sys.stdin.readline

n = int(input())
st = []

for _ in range(n):
    command = list(map(str, input().split()))
    if command[0] == "push":
        st.append(command[1])
    if command[0] == "pop":
        if len(st) > 0:
            print(st.pop())
        else:
            print(-1)
    if command[0] == "size":
        print(len(st))
    if command[0] == "empty":
        if len(st) == 0:
            print(1)
        else:
            print(0)
    if command[0] == "top":
        if len(st) > 0:
            print(st[-1])
        else:
            print(-1)
