"""
list -> set 변경하여 시간초과 해결
remove는 리스트 전체 검색하고 해당 이름 삭제하여 비효율적
"""
import sys

input = sys.stdin.readline

n = int(input())
company = set()

for _ in range(n):
    name, note = map(str, input().split())

    if note == "enter":
        company.add(name)
    elif note == "leave":
        company.discard(name)

for c in sorted(company, reverse=True):
    print(c)