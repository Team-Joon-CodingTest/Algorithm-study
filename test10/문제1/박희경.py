"""
DNA 문자열의 길이: S  (같은 문자는 구분 X)
비밀번호로 사용할 문자열의 길이: P
A C G T의 최소 개수

1. ACGT 최소 개수만큼 DNA 문자열에 포함하는지 확인
    1-1. 없으면 0 리턴
2. ACGT의 각 개수에서 최소 개수 뽑고(순열)
3. 사용하고 남은 DNA 문자열에서 남은 비밀번호 문자열 길이만큼 뽑는다.(순열)
-- 까지 생각해봤지만.. 슬라이딩 윈도우 문제

두 포인터를 범위(P)를 일정하게 하여 이동하며 최소 개수 이상이 있는지 확인하는 문제
"""
import sys

input = sys.stdin.readline

s, p = map(int, input().split())
dna = input().strip()
dic = {}
dna_dic = {}
keys = ['A', 'C', 'G', 'T']
values = list(map(int, input().split()))
for i in range(4):
    dic[keys[i]] = values[i]
    dna_dic[keys[i]] = 0

# 초기 윈도우 설정
for i in range(p):
    dna_dic[dna[i]] += 1

start, end = 0, p-1   # 슬라이딩 윈도우의 초기 범위
count = 0

while True:
    flag = True
    for key in keys:
        if dna_dic[key] < dic[key]:     # 최소 개수보다 없다면
            flag = False
            break

    if flag:
        count += 1

    if end == s - 1:
        break

    # 윈도우 이동: start 문자 제거, end를 하나 옮기고 그 위치의 문자 추가
    dna_dic[dna[start]] -= 1
    start += 1
    end += 1
    if end < s:
        dna_dic[dna[end]] += 1

print(count)