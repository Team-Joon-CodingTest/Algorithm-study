import sys
input = sys.stdin.readline
test = int(input())

for t in range(test):
    ary = []

    c = int(input())
    dic = {}
    for i in range(c):
        a, b = map(str, input().split())
        if b not in dic:
            dic[b] = [a]
        else:
            dic[b].append(a)
    # print(dic)

    result = 1
    for i in dic:
        result *= len(dic[i]) + 1
    print(result - 1)