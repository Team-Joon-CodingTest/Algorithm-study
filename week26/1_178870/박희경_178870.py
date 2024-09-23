"""
1. sum >= k; start += 1
2. sum < k; end += 1
3. sum == k; start, end 인덱스 저장
"""
def solution(sequence, k):
    answer = []
    start, end = 0, 0
    sum = sequence[start]

    while start <= end:
        if sum >= k:
            if sum == k:
                answer.append((start, end))
            sum -= sequence[start]
            start += 1
            if start >= len(sequence):
                break
        else:
            end += 1
            if end >= len(sequence):
                break
            sum += sequence[end]

    return sorted(answer, key = lambda x : x[1] - x[0])[0]