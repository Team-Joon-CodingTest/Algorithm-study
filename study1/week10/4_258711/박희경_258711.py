'''
    '생성된 정점': 나가는 간선의 수 >= 2 and 들어오는 간선의 수 == 0인 노드
    '막대 그래프'의 수: 나가는 간선의 수 == 0 and 들어오는 간선의 수 == 1인 노드
    '8자 그래프'의 수: 나가는 간선의 수 == 2 and 들어오는 간선의 수 == 2인 노드
    '도넛 그래프'의 수: '생성된 정점'의 나가는 간선의 수 - (막대 모양 그래프 + 8자 모양 그래프)
'''


def solution(edges):
    # 0: 생성된 정점 번호, 1: 막대도넛, 2: 막대, 3: 8자
    answer = [0, 0, 0, 0]

    exchangeCnts = {}  # 주고 받은 것 개수
    for a, b in edges:
        if not exchangeCnts.get(a):
            exchangeCnts[a] = [0, 0]
        if not exchangeCnts.get(b):
            exchangeCnts[b] = [0, 0]

        # 카운팅
        exchangeCnts[a][0] += 1
        exchangeCnts[b][1] += 1

    for key, exchangeCnt in exchangeCnts.items():
        # 생성된 정점
        if exchangeCnt[0] >= 2 and exchangeCnt[1] == 0:
            answer[0] = key
        # 막대 그래프
        elif exchangeCnt[0] == 0 and exchangeCnt[1] > 0:
            answer[2] += 1
        # 8자 그래프
        elif exchangeCnt[0] >= 2 and exchangeCnt[1] >= 2:
            answer[3] += 1
    # 도넛 그래프
    answer[1] = (exchangeCnts[answer[0]][0] - answer[2] - answer[3])

    return answer