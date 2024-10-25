def solution(park, routes):
    answer = []
    
    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0,]
    
    dict = {"N" : 0,
            "S" : 1,
            "W" : 2,
            "E" : 3}
    
    # 시작 좌표 찾기
    for i in range(len(park)):
        for j in range(len(park[i])):
            if(park[i][j] == "S"):
                x = j
                y = i
                break;
    
    for i in range(len(routes)):
        routes[i].split(" ")
        command = routes[i].split(" ")
        direction = command[0]
        dgree = command[1]
        
        for j in range(int(dgree)):
            DX = dx[dict[direction]]
            DY = dy[dict[direction]]
            # 조건 1
            if(park[y + DY][x + DX] != "X"):
                # 조건 2
                if((0 < x + DX < len(park[0])) and (0 < y + DY < len(park))):
                    x += DX
                    y += DY
    
    return y, x