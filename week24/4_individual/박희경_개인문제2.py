"""
프로그래머스: 42842번 카펫
"""
def solution(brown, yellow):
    grid = brown + yellow
    for i in range(3, int(grid ** 0.5) + 1):
        if grid % i != 0:
            continue
        j = grid // i
        if (i-2) * (j-2) == yellow:
            return [j, i]