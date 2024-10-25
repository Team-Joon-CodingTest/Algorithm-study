import sys
input = sys.stdin.readline

n = int(input())
arr = []

for _ in range(n):
    arr.append(int(input()))

arr.sort() # 정렬

ans = 0
for i in range(1, n+1):
    ans += abs(i-arr[i-1]) # 예상등수 - 원래 등수 빼준 절대값
print(ans)