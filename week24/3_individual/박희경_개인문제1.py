"""
프로그래머스 : 86491번; 최소직사각형
"""
def solution(sizes):
    long = []
    short = []
    for size in sizes:
        long.append(max(size))
        short.append(min(size))

    return max(long) * max(short)