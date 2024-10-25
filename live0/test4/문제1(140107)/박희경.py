"""
원점과의 거리 구하는 공식 = (x**2 + y**2)**(1/2)

x, y 좌표는 0부터 ~ k의 배수인데 d 이하의 수
완전 탐색 x
"""
from itertools import product # 중복순열

def solution(k, d):
    answer = 0

    # x, y 좌표
    grid = []

    for i in range(d+1):
        dot = i * k
        if dot > d:
            break
        grid.append(dot)

    grid = list(product(grid, repeat=2))

    for g in grid:
        if ((g[0]**2 + g[1]**2)**(1/2)) <= d:
            answer += 1


    return answer