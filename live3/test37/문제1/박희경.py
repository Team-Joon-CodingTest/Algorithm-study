import sys
from itertools import *

input = sys.stdin.readline

x = list(map(str, input().rstrip()))
x_list = sorted(list(permutations(x, len(x))))

for val in x_list:
    num = int(''.join(val))
    if num > int(''.join(x)):
        print(num)
        break
if int(''.join(x_list[-1])) == int(''.join(x)):
    print(0)

