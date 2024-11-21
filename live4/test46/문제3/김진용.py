park = ["SOO", "OXX", "OOO"]
routes = ["E 2", "S 2", "W 1"]

x, y = 0, 0
for i in range(len(park)):
    for j in range(len(park[0])):
        if park[i][j] == 'S':
            x, y = i, j
print(x, y)

directions = {'E': (0, 1), 'W': (0, -1), 'S': (1, 0), 'N': (-1, 0)}

for route in routes:
    direction, distance = route[0], int(route[2])
    print(direction, distance)
    dx, dy = directions[direction]

    nx, ny = x, y
    valid = True
    for _ in range(distance):
        nx += dx
        ny += dy

        if not (0 <= nx < len(park) and 0 <= ny < len(park[0])):
            valid = False
            break

        if park[nx][ny] == 'X':
            valid = False
            break

    if valid:
        x = nx
        y = ny

result = [x, y]
print(result)
