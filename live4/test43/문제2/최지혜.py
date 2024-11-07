import sys

input = sys.stdin.readline

def solution():
    n, d = map(int, input().split())
    
    # 지름길 정보
    graph = [list(map(int, input().split())) for _ in range(n)]
    
    # 거리 정보를 저장
    distance = [i for i in range(d + 1)]
    
    # 거리 최솟값 계산
    for i in range(d + 1):
        # 바로 이전 위치에서 현재 위치까지 1만큼 이동한 경우와 현재 저장된 값 중 작은 값을 선택
        distance[i] = min(distance[i], distance[i - 1] + 1)

        # 지름길 정보 탐색
        for start, end, short in graph:
            # 현재 위치가 지름길의 시작점이고, 지름길의 끝이 고속도로 범위 내에 있을 때
            if i == start and end <= d and distance[i] + short < distance[end]:
                # 지름길을 이용한 거리가 더 짧다면 거리 정보를 갱신
                distance[end] = distance[i] + short

    # 고속도로의 끝 위치까지의 최단 거리를 출력
    print(distance[d])

solution()
