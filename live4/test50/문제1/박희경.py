import sys

input = sys.stdin.readline

s, p = map(int, input().split())
dna = list(map(str, input().strip()))
a, c, g, t = map(int, input().split())
dic = {'A': a, 'C': c, 'G': g, 'T': t}
current_dic = {'A': 0, 'C': 0, 'G': 0, 'T': 0}
count = 0


for i in range(p):
    current_dic[dna[i]] += 1

start, end = 0, p - 1
while True:
    if end == s:
        break
    flag = True

    for i in ('A', 'C', 'G', 'T'):
        if current_dic[i] < dic[i]:
            flag = False
            break

    if flag:
        count += 1

    current_dic[dna[start]] -= 1
    start += 1
    end += 1

    if end < s:
        current_dic[dna[end]] += 1


print(count)