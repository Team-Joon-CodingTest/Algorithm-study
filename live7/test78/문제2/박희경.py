import sys

input = sys.stdin.readline

m = int(input())
s = set()
for _ in range(m):
    cmd = list(map(str, input().split()))

    if cmd[0] == 'add':
        s.add(int(cmd[1]))
    elif cmd[0] == 'remove':
        s.discard(int(cmd[1]))
    elif cmd[0] == 'check':
        if int(cmd[1]) in s:
            print(1)
        else:
            print(0)
    elif cmd[0] == 'toggle':
        num = int(cmd[1])
        if num in s:
            s.remove(num)
        else:
            s.add(num)
    elif cmd[0] == 'all':
        s = set(range(1, 21))
    elif cmd[0] == 'empty':
        s.clear()
