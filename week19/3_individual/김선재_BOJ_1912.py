'''
[dp]
완전탐색시 시간초과 우려 있음
직전항까지의 최대 값을 통해 결과 도출
'''
import sys

input = sys.stdin.readline

N = int(input())
list = list(map(int, input().split()))

dp = [0] * N
dp[0] = list[0]

for i in range(1,N):
    dp[i] = max(list[i], list[i] + dp[i-1])

print(max(dp))