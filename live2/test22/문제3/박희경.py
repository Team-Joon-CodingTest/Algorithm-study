"""
이런..
"""
import sys

input = sys.stdin.readline

n, jimin, hansu = map(int, input().split())
round = 0

# 두 사람이 대결할 때까지 반복
while jimin != hansu:
    # 라운드 계산
    jimin = (jimin + 1) // 2
    hansu = (hansu + 1) // 2
    round += 1

print(round)


# 2명씩 토너먼트 구성
# def set_tournament(arr):
#     global round
#     for i in range(0, len(arr) - 1, 2):
#         tournament.append((people[i], arr[i + 1]))
#     round += 1
#
#
# while True:
#     set_tournament(people)
#     print(tournament)
#     if (8, 9) in tournament:
#         print(tournament)
#         print(round)
#         break
#     else:
#         for i in range(0, len(people), 2):
#             if people[i] != jimin and people[i] != hansu:
#                 people.remove(people[i])
#             elif people[i] == jimin:
#                 people.remove(people[i + 1])
