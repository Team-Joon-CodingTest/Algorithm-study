from itertools import *
string = list(map(str, input()))
length = len(string)
ary = []
for i in permutations(string, length):
    if int(''.join(i)) > int(''.join(string)):
        ary.append(int(''.join(i)))
if len(ary) == 0:
    print(0)
else:
    print(min(ary))