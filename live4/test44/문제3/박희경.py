def solution(players, callings):
    answer = []
    dict = {}

    # 등수와 선수 딕셔너리로
    keys = [i for i in range(1, len(players) + 1)]
    for i in range(0, len(players)):
        dict[players[i]] = keys[i]

    # print(players)
    return answer