import sys

input = sys.stdin.readline

n = int(input())
friends = []
for _ in range(n):
    friends.append(list(map(str, input().rstrip())))

connected = [[0] * n for _ in range(n)]
for k in range(n):
    for i in range(n):
        for j in range(n):
            if i == j:
                continue
            # i -> k -> j 로 연결되어 있는지
            if friends[i][j] == 'Y' or (friends[i][k] == 'Y' and friends[k][j] == 'Y'):
                connected[i][j] = 1

result = 0
for friend in connected:
    result = max(result, sum(friend))
print(result)
