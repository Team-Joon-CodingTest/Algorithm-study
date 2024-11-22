import math


def solution(wallpaper):
    answer = []

    lux, luy, rdx, rdy = math.inf, math.inf, -math.inf, -math.inf

    # lux, luy
    for i in range(len(wallpaper)):
        for j in range(len(wallpaper[i])):
            if wallpaper[i][j] == "#":
                lux = min(lux, i)
                luy = min(luy, j)
                break

    # rdx, rdy
    for i in range(len(wallpaper) - 1, -1, -1):
        for j in range(len(wallpaper[i]) - 1, -1, -1):
            if wallpaper[i][j] == "#":
                # print(i,j)
                rdx = max(rdx, i + 1)
                rdy = max(rdy, j + 1)
                break

    answer.append(lux)
    answer.append(luy)
    answer.append(rdx)
    answer.append(rdy)

    return answer