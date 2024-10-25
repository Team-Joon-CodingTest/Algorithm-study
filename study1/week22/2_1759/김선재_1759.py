'''
조합을 사용해서 암호를 만들고 모음 개수, 자음 개수를 고려하여 필터링
'''

import sys
from itertools import combinations


input = sys.stdin.readline
L, C = map(int, input().split())
arr = list(map(str, input().split()))

Comb = list((combinations(arr, L)))
vowels = 'aeiou'
answer = []

for PW in Comb:
    vowel_count = 0
    
    # 모음 개수 확인
    for char in PW:
        if char in vowels:
            vowel_count += 1
    
    # 모음이 1개 이상, 자음이 2개 이상
    if 1 <= vowel_count <= L-2:
        answer.append(PW)
    
    # 튜블 -> 정렬, 문자열로 변환, 출력형식 맞춰줌
answer = [''.join(sorted(t)) for t in answer]

# 문자열 리스트를 정렬
answer.sort()

for ans in answer:
    print(ans)