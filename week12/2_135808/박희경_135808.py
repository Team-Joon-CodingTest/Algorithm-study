"""
그리드?
1. 가장 점수가 높은 사과부터 상자에 넣는다.
2. 각 상자의 낮은 점수 * m
"""

def solution(k, m, score):
    answer = 0
    score = sorted(score, reverse=True)

    # 가장 점수 높은 사과부터 m개씩 포장
    for i in range(0, len(score), m):
        if len(score[i:i+m]) == m:
            answer += min(score[i:i+m]) * m
    return answer