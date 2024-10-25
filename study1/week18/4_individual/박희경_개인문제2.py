"""
bottom-up
"""
import sys

input = sys.stdin.readline

t = int(input())    # 테스트 케이스

for _ in range(t):
    n = int(input())    # 열의 수
    score = [[] for _ in range(2)]

    for j in range(2):
        score[j] = list(map(int, input().split())) # 스티커 점수

    # 기저 상태
    if n > 1:
        score[0][1] += score[1][0]
        score[1][1] += score[0][0]
    # 점화식
    for i in range(2, n):
        score[0][i] += max(score[1][i-1], score[1][i-2])
        score[1][i] += max(score[0][i-1], score[0][i-2])

    result = max(score[0][n-1], score[1][n-1])
    print(result)