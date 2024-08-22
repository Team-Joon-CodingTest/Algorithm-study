"""
슬라이딩 윈도우
k 범위만큼 잘라서 나올 수 있는 부분 문자열 구하기
정렬하고 같은 문자열 개수 구하기
{A, G, T, C}
"""
import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    k, w = map(str, input().split())
    k = int(k)

    start, end = 0, k
    mcs = []
    while end <= len(w):
        mcs.append(w[start:end])
        start += 1
        end += 1

    sorted_mcs = sorted([''.join(sorted(m)) for m in mcs])

    dic = {}
    keys = set(sorted_mcs)

    for key in keys:
        dic[key] = 0

    for i in range(len(sorted_mcs)):
        if sorted_mcs[i] in keys:
            dic[sorted_mcs[i]] += 1

    print(max(dic.values()))