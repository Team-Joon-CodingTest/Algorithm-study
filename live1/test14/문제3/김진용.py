n = int(input())
ary = []
ary2 = []
for i in range(1, n+1):
    ary.append(i)
s = True
while len(ary) > 1:
    if s:
        ary2.append(ary.pop(0))
        s = False
    else:
        ary.append(ary.pop(0))
        s = True

ary2.append(ary.pop())
print(*ary2)