N, K = map(int, input().split())

result = 0
while True:
    if N % K == 0:
        N = N/K
        result += 1
    elif N == 1:
        break
    else:
        N = N - 1
        result += 1

print(result)

"""
이코테 그리드_실전문제4
25 5
"""