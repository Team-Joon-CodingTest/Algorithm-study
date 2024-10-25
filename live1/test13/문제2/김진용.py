num = int(input())
dic = {}
ary = []
for n in range(num):
    p = input().split()
    if p[-1] == 'enter':
        if p[0] not in dic:
            dic[p[0]] = 1
        else:
            dic[p[0]] += 1
    elif p[-1] == 'leave':
        if p[0] in dic:
            dic[p[0]] = 0
    # print(p[0], p[-1])
for d in dic.keys():
    if dic[d] == 1:
        ary.append(d)
ary.sort(reverse=True)
for i in ary:
    print(i)