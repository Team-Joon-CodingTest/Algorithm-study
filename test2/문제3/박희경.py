def solution(k, m, score):
    answer = 0

    score.sort(reverse=True)

    apple = len(score)  # 사과 계수
    box_cnt = apple // m  # 나오는 상자 개수

    box = []
    for i in range(0, apple, m):
        box.append(score[i:i + m])

    for b in box:
        if len(b) == m:
            answer += min(b) * m

    return answer