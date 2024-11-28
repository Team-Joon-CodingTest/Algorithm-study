s, p = map(int, input().split())
string = list(input())
A, C, G, T = map(int, input().split())

dna = {'A': 0, 'C': 0, 'G': 0, 'T': 0}
start, end = 0, p-1
ary = string[start:end]
for i in ary:
    dna[i] += 1

cnt = 0
while end < s:
    dna[string[end]] += 1

    if dna['A'] >= A and dna['C'] >= C and dna['G'] >= G and dna['T'] >= T:
        cnt += 1

    dna[string[start]] -= 1
    start += 1
    end += 1
print(cnt)