"""
장소 달라야 진척도 그대로 얻는다.
=> 같은 열이면 진척도의 반
"""
import sys

input = sys.stdin.readline

n, m = map(int, input().split())

grid = [list(map(int, input().split())) for _ in range(2)]

cnt = 0


def contribute(day, current_sum, prev):
    global cnt
    if day == n:
        if current_sum >= m:
            cnt += 1
        return
    for i in range(2):
        for j in range(3):
            next_sum = current_sum
            if j == prev:  # 이전과 같은 장소 선택
                next_sum += grid[i][j] // 2
            else:
                next_sum += grid[i][j]
            contribute(day + 1, next_sum, j)


contribute(0, 0, -1)    # 학교부터
print(cnt)
