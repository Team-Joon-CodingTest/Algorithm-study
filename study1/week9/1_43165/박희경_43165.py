cnt = 0


def dfs(numbers, target, current, depth):
    global cnt
    if depth == len(numbers):
        if current == target:
            cnt += 1
        return

    dfs(numbers, target, current + numbers[depth], depth + 1)
    dfs(numbers, target, current - numbers[depth], depth + 1)


def solution(numbers, target):
    dfs(numbers, target, 0, 0)
    return cnt