'''
[dp]
1. bottom up
2. 물웅덩이 일때 예외처리
'''
def solution(m, n, puddles):
    answer = 0

    #초기화
    dp = [[0] * 101 for _ in range(101)]

    for x in range(1, m+1):
        dp[1][x] = 1
    
    for y in range(1, n+1):
        dp[y][1] = 1

    for puddle in puddles:
        x, y = puddle
        dp[y][x] = -1

    #dp
    for y in range(1, n + 1):
        for x in range(1, m + 1):
            #시작점
            if y == 1 and x == 1:
                continue
            #물웅덩이
            if dp[y][x] == -1:
                dp[y][x] = 0
            else:
                left = dp[y][x - 1]
                up = dp[y - 1][x]
                dp[y][x] = (left + up) % 1000000007

    answer = dp[n][m]
    
    return answer