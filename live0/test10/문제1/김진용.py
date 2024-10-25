from collections import deque

s, p = map(int, input().split())
dna = list(input())
A, C, G, T = map(int, input().split())

left, right = 0, p-1 # 포인터 설정
ary = []
ary = deque(dna[left:right])
dic = {'A': 0, 'C': 0, 'G': 0, 'T': 0}
for i in ary:
    dic[i] += 1

cnt = 0

while right < s:
    dic[dna[right]] += 1 # 구간 설정

    if dic['A'] >= A and dic['C'] >= C and dic['G'] >= G and dic['T'] >= T:
        cnt += 1

    dic[dna[left]] -= 1
    left += 1
    right += 1

print(cnt)