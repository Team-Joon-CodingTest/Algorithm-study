test = int(input())
ary = {}
for t in range(test):
    name, eorl = map(str, input().split())

    if eorl == "enter":
        ary[name] = 1
    else:
        ary[name] = 0
    result_ary = []
    for i in ary:
        if ary[i] == 1:
            result_ary.append(i)
    result_ary.sort()
    for i in result_ary:
        print(i)
