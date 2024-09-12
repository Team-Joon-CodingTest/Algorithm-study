import sys
input = sys.stdin.readline

n = int(input())

ary = []

for i in range(n):
    ary.append(int(input()))

ary.sort()  #   정렬 시켜주고

cnt = 0
result = 0

for i in ary:
    cnt += 1
    result += abs(cnt - i)  #   순위별로 불만족도 더해주기+

print(result)