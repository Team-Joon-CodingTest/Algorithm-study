import sys
input = sys.stdin.readline

n, k = map(int, input().split())
nums = [0] * 1000001
end = 0

for _ in range(n):
    g, x = map(int, input().split())
    nums[x] = g
    end = max(end, x) # 마지막 얼음이 위치한 좌표 업데이트

step = 2 * k + 1

# 처음 윈도우에 포함된 범위의 얼음 합 계산
window = sum(nums[:step])
answer = window

for i in range(step, end+1):
    window += nums[i] - nums[i-step]
    answer = max(answer, window)
print(answer)