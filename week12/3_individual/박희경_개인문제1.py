N, M, K = map(int, input().split())
data = list(map(int, input().split())) # data = [2, 4, 5, 4, 6]

# 큰 순서대로 정렬
data.sort()

# 가장 큰 수
first = data[-1]
# 두 번째로 큰 수
second = data[-2]

# 가장 큰 수 더해지는 횟수
first_count = M//K * K
# 두 번째로 큰 수가 더해지는 횟수
second_count = M - K * (M//K)

result = first * first_count + second_count * second

print(result)


"""
이코테 그리드_실전문제2
5 8 3
2 4 5 4 6
"""

