'''
N이 8이하 이므로 완전탐색의 경우를 생각해봐도 괜찮을 것 같음  
'''

import sys
from itertools import permutations

input = sys.stdin.readline
N = int(input())
arr = list(map(int, input().split()))

# arr 에서 N개를 뽑아 줄을 세움
# [(20, 1, 15, 8, 4, 10), (20, 1, 15, 8, 10, 4),
per = list(permutations(arr, N))

def cal(arr):
    ans = 0
    for i in range(N - 1):
        ans += abs(arr[i] - arr[i+1])
    return ans

answer = 0 #절대값의 합은 0을 초과할수 없음
for p in per:
    answer = max(answer, cal(p))

print(answer)