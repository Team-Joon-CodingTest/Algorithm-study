from itertools import permutations
n = int(input())

ary = list(map(int, input().split()))
result = 0
for i in permutations(ary, n):
    total = 0
    for j in range(1, len(i)):
        total += abs(i[j] - i[j-1])
    result = max(result, total)
print(result)