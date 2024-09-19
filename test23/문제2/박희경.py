import sys
from itertools import *

input = sys.stdin.readline

t = int(input()) 
dict = {}


for _ in range(t):
    n = int(input())    # 의상 수
    for _ in range(n):
        name, type = map(str, input().split())
        
        dict[type] = name

    cnt = 1

    for t, n in dict.items:
        cnt += len(dict[t])+1
