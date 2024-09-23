"""
능력치 Sij는 i번 사람과 j번 사람이 같은 팀에 속했을 때, 팀에 더해지는 능력치
response: 스타트 팀과 링크 팀의 능력치의 차이의 최솟값

1. N/2명씩 팀이 될 수 있는 경우의 수 구하기 -> 조합
2. 모든 경우의 수에서 능력치 차이 중 최솟값 리턴
"""
import sys
from itertools import combinations

input = sys.stdin.readline

N = int(input())
grid = [list(map(int, input().split())) for _ in range(N)]


# 팀 능력치
def team_skill(team):
    result = 0
    for i in team:
        for j in team:
            result += grid[i-1][j-1]
    return result


members = [i for i in range(1, N + 1)]
teams = list(combinations(members, N//2))
min_diff = float('inf')

for team in teams:
    another_team = [x for x in members if x not in team]  # 나머지 팀

    skill = team_skill(team)
    another_skill = team_skill(another_team)

    diff = abs(skill - another_skill)
    min_diff = min(min_diff, diff)

print(min_diff)
