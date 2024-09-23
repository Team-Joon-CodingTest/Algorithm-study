import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
sum = [0]
temp = 0

for i in arr:
    temp = temp + i
    sum.append(temp) # 누적합 구하기

m = int(input())
# 구간합 구하기 => i, j가 1, 3일 때 인덱스 3까지 더한 누적합에서 인덱스 0까지 더한 누적합을 빼주기
for _ in range(m):
    i, j = map(int, input().split())
    print(sum[j] - sum[i-1]) 
    