import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = list(map(int, input().split()))
sum = [0]
temp = 0

for i in arr:
    temp = temp + i
    sum.append(temp) # 누적합 구하기

for _ in range(m):
    i, j = map(int, input().split())
    print(sum[j] - sum[i-1]) 