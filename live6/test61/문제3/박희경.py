"""
푸는중
"""

def solution(citations):
    answer = 0
    citations = sorted(citations)  # [0, 1, 3, 5, 6]
    n = len(citations)

    start, end = 0, n
    mid = (start + end) // 2

    while True:
        # h_index = 0
        if mid <= len(citations[mid:end + 1]):
            return citations[mid]
        else:

    return answer