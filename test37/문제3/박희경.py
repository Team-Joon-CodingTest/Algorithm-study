import sys

input = sys.stdin.readline

n = int(input())
arr = sorted(list(map(int, input().split())))  # [1, 4, 8, 10, 15, 20]
val = []  # 순열을 임시 저장할 배열
result = []  # 순열의 차이 합 저장할 배열
visited = [0] * n


def backtrack(depth):
    if depth == n:
        result.append(sum(abs(val[i] - val[i + 1]) for i in range(n - 1)))
        return
    for i in range(n):
        if not visited[i]:
            visited[i] = 1
            val.append(arr[i])
            backtrack(depth + 1)
            visited[i] = 0
            val.pop()


backtrack(0)
print(max(result))
