import sys

input = sys.stdin.readline

M = int(input())

ary = []
result_set = set([])
for _ in range(M):
    ary = list(map(str, input().split()))

    o = ary[0]

    if o == 'add':
        result_set.add(ary[1])
    elif o == 'remove':
        result_set.remove(ary[1])
    elif o == 'check':
        if ary[1] in result_set:
            print(1)
        else:
            print(0)
    elif o == 'toggle':
        if ary[1] in result_set:
            result_set.remove(ary[1])
        else:
            result_set.add(ary[1])
    elif o == 'all':
        result_set = set([str(i) for i in range(1, 21)])
    elif o == 'empty':
        result_set = set([])