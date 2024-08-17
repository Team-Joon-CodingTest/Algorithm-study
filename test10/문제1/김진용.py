s, p = map(int, input().split())
dna = list(input())
mini = {'A': 0, 'C': 0, 'G': 0, 'T': 0, }
mini['A'], mini['C'], mini['G'], mini['T'] = map(int, input().split())

for i in mini:
    if dna.count(i) < mini[i]:
        print(0)
        exit()

