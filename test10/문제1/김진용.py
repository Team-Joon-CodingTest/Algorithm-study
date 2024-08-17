from itertools import permutations

s, p = map(int, input().split())
dna = list(input())
dnac = {'A': dna.count('A'), 'C': dna.count('C'), 'G': dna.count('G'), 'T': dna.count('T')}
mini = {'A': 0, 'C': 0, 'G': 0, 'T': 0, }
mini['A'], mini['C'], mini['G'], mini['T'] = map(int, input().split())

for i in ('A', 'C', 'G', 'T'):
    if dnac[i] < mini[i]: # 최소 개수보다 적다면 만들 수 있는 비밀번호가 없음
        print(0)
        exit()
