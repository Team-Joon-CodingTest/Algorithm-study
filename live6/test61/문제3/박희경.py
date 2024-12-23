def solution(citations):
    answer = 0
    citations = sorted(citations, reverse=True)

    for idx, c in enumerate(citations, start=1):
        answer = max(answer, min(idx, c))

    return answer