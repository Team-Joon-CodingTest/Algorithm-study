import sys
input = sys.stdin.readline
n = int(input())
ary = []
ary_2 = []
for i in range(n):
    ary.append(i+1)
    ary_2.append(int(input()))
ary_2.sort()

result = 0
for i in range(n):
    result += abs(ary[i] - ary_2[i])
print(result)