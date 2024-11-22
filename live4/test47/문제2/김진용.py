from itertools import combinations

test = int(input())

for _ in range(test):
    a, b = map(int, input().split())
    child = 1
    parent = 1

    for i in range(b, b-a, -1):
        child *= i
    for i in range(a, 0, -1):
        parent *= i
    print(child//parent)