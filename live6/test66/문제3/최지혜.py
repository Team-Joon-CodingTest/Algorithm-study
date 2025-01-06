def solution(n,a,b):
    answer = 0
    
    while a != b:
        a = (a+1) // 2 # 만약 홀수면 의도와 다르게 계산될 수 있기때문에 1 더해줌
        b = (b+1) // 2
        answer += 1
    
    return answer
        