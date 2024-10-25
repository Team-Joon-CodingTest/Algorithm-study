'''
드래그 시작점 lux = 가장 왼쪽에 위치한 파일의 x 좌표 -> min x
드래그 시작점 luy = 가장 위쪽에 위치한 파일의 y 좌표 -> min y
드래그 끝점 rdx = 가장 오른쪽에 위치한 파일의 x 좌표 -> max x
드래그 끝점 rdy = 가장 아래쪽에 위치한 파일의 y 좌표 -> max y
'''

min_x = 50
min_y = 50
max_x = -1
max_y = -1

def check(x,y):
    min_x = min(min_x, x)
    min_y = min(min_y, x)
    max_x = max(max_y, y)
    max_y = max(max_y, y)    
    
def solution(wallpaper):
    answer = []
    
    for i in range(len(wallpaper)):
        for j in range(len(wallpaper[i])):
            item = wallpaper[i][j] 
            if(item == '#'):
                check(i, j)
    

    return max_x