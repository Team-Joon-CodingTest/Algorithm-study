def solution(N, stages):
    answer = []
    # 실패율
    ratio = {}
    player = len(stages)

    for i in range(1, N + 1):
        if player == 0:  # 스테이지에 도달한 플레이어 수가 0명일 때
            ratio[i] = 0
        else:
            ratio[i] = stages.count(i) / player
            player -= stages.count(i)  # 스테이지에 도달한 플레이어 수 갱신

    answer = sorted(ratio, key=lambda x: ratio[x], reverse=True)

    return answer