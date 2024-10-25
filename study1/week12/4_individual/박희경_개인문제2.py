N, M = map(int, input().split())

result = 0
for i in range(N):
    data = list(map(int, input().split())) # data[0] = [3, 1, 2]
    min_value = min(data)
    result = max(result, min_value)

print(result)


"""
이코테 그리드_실전문제3
3 3
3 1 2
4 1 4
2 2 2

2 4
7 3 1 8
3 3 3 4
"""