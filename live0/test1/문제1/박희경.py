"""
(x 좌료에서 가장 작은 수, y 좌표에서 가장 작은 수, x 좌표에서 가장 큰 수+1, y 좌표에서 가장 가장 큰 수)
"""


def solution(wallpaper):
    answer = []
    max_x_value = 0
    min_x_value = 9999
    max_y_value = 0
    min_y_value = 9999

    file = []  # '#' 이 있는 좌표 값 담는 리스트

    for i in range(0, len(wallpaper)):
        for j in range(0, len(wallpaper[i])):
            if wallpaper[i][j] == '#':
                file.append((i, j))

    for i in range(0, len(file)):
        min_x_value = min(min_x_value, file[i][0])
        min_y_value = min(min_y_value, file[i][1])
        max_x_value = max(max_x_value, file[i][0])
        max_y_value = max(max_y_value, file[i][1])

    answer.append(min_x_value)
    answer.append(min_y_value)
    answer.append(max_x_value + 1)
    answer.append(max_y_value + 1)

    return answer