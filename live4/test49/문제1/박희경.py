import sys

input = sys.stdin.readline

n = int(input())
rank = {}

for _ in range(n):
    title = input().strip()
    if rank.get(title):
        rank[title] += 1
    else:
        rank[title] = 1


max_value = max(rank.values())
max_key = []

for key, value in rank.items():
    if value == max_value:
        max_key.append(key)

max_key.sort()

print(max_key[0])
