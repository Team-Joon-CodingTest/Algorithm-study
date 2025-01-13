import sys
from math import *

input = sys.stdin.readline

n = int(input())
m = int(input())


print(comb(m - 1, n - 1))
