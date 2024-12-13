n = int(input())
ary = []
for i in range(1, n+1):
    ary.append(i)
# print(ary)

garbage = []
s = 0
while len(ary) > 1:
    # print(garbage)
    if s == 0:
        garbage.append(ary.pop(0))
        s = 1
        continue
    elif s == 1:
        ary.append(ary.pop(0))
        s = 0
print(*garbage, *ary)