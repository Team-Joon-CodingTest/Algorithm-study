import sys

input = sys.stdin.readline

s, p = map(int, input().split())
dna = list(map(str, input().strip()))
a, c, g, t = map(int, input().split())
dic = {'A': a, 'C': c, 'G': g, 'T': t}
dna_dic = {'A': 0, 'C': 0, 'G': 0, 'T': 0}
count = 0


for i in range(p):
    dna_dic[dna[i]] += 1

start, end = 0, p
while end < s:
    flag = True

    dna_dic[dna[end]] += 1
    dna_dic[dna[start]] -= 1

    for i in ('A', 'C', 'G', 'T'):
        if dna_dic[i] < dic[i]:
            flag = False
            break

    if flag:
        count += 1

    start += 1
    end += 1


print(count)

"""
9 8
CCTGGATTG
2 0 1 1

4 2
GATA
1 0 0 1
"""