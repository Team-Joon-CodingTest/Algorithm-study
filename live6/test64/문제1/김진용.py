from itertools import *

n = list(input())
n.sort(reverse=True)

number = int(''.join(n))

if number % 30 != 0:
    print(-1)
else:
    print(number)
