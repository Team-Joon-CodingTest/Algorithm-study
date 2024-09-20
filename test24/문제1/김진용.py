from itertools import combinations
import sys
input = sys.stdin.readline
ary = list(map(int, input().split()))
rary = []
for i in range(1, len(ary)):
    rary.append(ary[i])
n = ary[0]
while True:
    for i in combinations(rary, 6):
        print(*i)
    print()
    ary = list(map(int, input().split()))
    rary = []
    for i in range(1, len(ary)):
        rary.append(ary[i])
    n = ary[0]
    if n == 0:
        break