def solution(n, left, right):
    answer = []

    for i in range(left, right + 1):
        x = i // n  # 행 (이거 어떻게 규칙 찾는거야..)
        y = i % n   # 열
        answer.append(max(x + 1, y + 1))

    return answer