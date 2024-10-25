import sys
input = sys.stdin.readline

star = int(input())
length = (4 * star) - 3 # 별의 개로 개수가 4씩 늘어남
array = [[' '] * length for _ in range(length)]

def star19(n, x, y):
    global array

    length = (4 * n) - 3
    if length ==1: # input 값이 1이면
        array[x][y] = "*"
        return
    
    else:
        for i in range(length):
            array[x][y+i] = "*" # 윗변 그리기
            array[y+i][x] = "*" # 왼쪽변 그리기
            array[x + (length - 1)][y + i] = "*"  # 아랫변 그리기 
            array[x + i][y + (length - 1)] = "*" # 오른쪽변 그리기

        # 다음 재귀 호출을 위해 n, x, y 값 업데이트
        n = n-1
        x = x+2 # 2칸씩 떨어져 있기 때문에 x, y에 2씩 더해줌
        y = y+2
        star19(n, x, y)
        return

star19(star, 0, 0)
for i in range(length):
    print("".join(array[i]))

