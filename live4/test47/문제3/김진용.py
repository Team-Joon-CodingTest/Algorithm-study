# wallpaper = [".#...", "..#..", "...#."]
# wallpaper = ["..........", ".....#....", "......##..", "...##.....", "....#....."]
# wallpaper = [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]
wallpaper = ["..", "#."]
x_min = len(wallpaper)
x_max = 0

y_min = len(wallpaper[0])
y_max = 0

first_ary = []
second_ary = []
for i in range(len(wallpaper)):
    for j in range(len(wallpaper[0])):
        if wallpaper[i][j] == '#':
            first_ary.append(i)
            second_ary.append(j)
print(first_ary)
print(second_ary)

result = []
result.append(min(first_ary))
result.append(min(second_ary))
result.append(max(first_ary)+1)
result.append(max(second_ary)+1)
print(result)