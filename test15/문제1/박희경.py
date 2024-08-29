import sys

input = sys.stdin.readline

n, k = map(str, input().split())
n = int(n)
player = set()

for _ in range(n):
    player.add(input().rstrip())

if k == 'Y':
    print(len(player))
elif k == 'F':
    print(len(player) // 2)
elif k == 'O':
    print(len(player) // 3)