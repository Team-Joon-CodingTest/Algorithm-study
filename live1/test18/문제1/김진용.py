import sys
input = sys.stdin.readline

n, k = map(int, input().split())

ary = list(map(int, input().split()))

a = 0
b = a + k

sary = []

total = 0

for i in range(b):      # 첫 번째 범위의 합 구하고
    total += ary[i]

sary.append(total)      # 넣어주고

while b < len(ary):     # 범위 이동하면서 넣어주기
    total -= ary[a]
    total += ary[b]

    sary.append(total)

    a += 1
    b += 1

print(max(sary))        # 최대값 구하기