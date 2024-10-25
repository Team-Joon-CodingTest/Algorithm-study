n = int(input())

dic = {}

for i in range(n):
    book = input()

    if book not in dic:
        dic[book] = 1
    else:
        dic[book] += 1

ary = []
for i in dic:
    if max(dic.values()) == dic[i]:
        ary.append(i)

ary.sort()
print(ary[0])
