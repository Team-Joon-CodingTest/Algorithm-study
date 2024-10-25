'''
1. 내림차순 정렬
2. m 간격으로 그룹의 마지막 인덱스 값 * m을 answer 에 더해줌
'''

def solution(k, m, score):
    answer = 0
    score.sort(reverse=True) 
    
    for i in range(m-1, len(score), m):
        answer += score[i] * m

    return answer