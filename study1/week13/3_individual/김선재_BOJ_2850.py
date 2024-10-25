'''
1. 절단기의 높이를 가장 긴 길이의 나무와 동일하게 설정
2. 높이를 1칸씩 줄이면서 벌목
3. 자른 나무 길이의 합계(sum)를 더함
4. sum >= M 일때 까지 
5. 시간초과가 발생할우려 -> 이분탐색으로 해결
'''
import sys
import math

N, M = map(int, sys.stdin.readline().split())
trees = list(map(int, sys.stdin.readline().split()))

answer = 0

max = max(trees)
min = 0

while(min <= max):
    mid = (max + min) // 2
    sum = 0

    # 벌목
    for height in trees:
        if height > mid:
            sum += height - mid

    if sum == M:
        break
    # 절단기 높이를 높임
    elif sum > M:
        min = mid + 1
    # 절단기 높이를 낮춤
    else:
        max = mid - 1

answer = (max + min) // 2
    
print(answer)