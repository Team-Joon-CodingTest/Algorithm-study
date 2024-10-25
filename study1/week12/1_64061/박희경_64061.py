"""
스택
1. board[0:][moves[0:]-1] 이런 식으로 탐색
1.1 나오면 queue에 넣기
2. queue에 같은 수가 들어오면 카운트 하고 둘 다 빼기
"""
from collections import deque


def solution(board, moves):
    answer = 0
    bucket = deque()
    for move in moves:
        for i in range(len(board)):
            if board[i][move - 1] != 0:
                bucket.append(board[i][move - 1])
                board[i][move - 1] = 0
                if len(bucket) > 1 and bucket[-1] == bucket[-2]:
                    answer += 2
                    bucket.pop()
                    bucket.pop()
                break
            else:
                continue
    return answer
