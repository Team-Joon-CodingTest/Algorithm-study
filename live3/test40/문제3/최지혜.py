import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
benefit, result = 0, 0

for i in range(n-1, -1, -1): # 뒤에서부터 진행
    benefit = max(benefit, arr[i])
    result = max(result, benefit - arr[i])

print(result)