"""
서로 다른 L개의 알파벳 소문자
최소 한 개의 모음(a, e, i, o, u)과 최소 두 개의 자음
정렬된 문자열
"""
import sys
import itertools

input = sys.stdin.readline

l, c = map(int, input().split())
arr = list((input().split()))

vowels = {'a', 'e', 'i', 'o', 'u'}
answer = []

for comb in itertools.combinations(arr, l):
    combi = []
    # 모음, 자음 개수 계산
    count_vowels = sum(1 for x in comb if x in vowels)
    count_consonants = l - count_vowels

    if count_vowels >= 1 and count_consonants >= 2:
        for i in comb:
            combi.append(i)
        answer.append(combi)

for ans in answer:
    ans.sort()
answer.sort()

for ans in answer:
    print(''.join(ans))
