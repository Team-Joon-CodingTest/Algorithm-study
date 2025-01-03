import sys
from itertools import *

input = sys.stdin.readline

n = sorted(list(map(str, input().rstrip())), reverse=True)
sum = 0

if '0' not in n:
    print(-1)
else:
    for i in n:
        sum += int(i)
    if sum % 3  == 0:
        print(''.join(n))
    else:
        print(-1)