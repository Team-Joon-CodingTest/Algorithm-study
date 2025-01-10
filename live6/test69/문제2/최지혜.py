import itertools

n = int(input())
num = list(range(1, n+1))

a = itertools.permutations(num, n) #(1,2,3) 리스트에서 길이가 3인 모든 순열 생성
k = list(a)

for i in k:
    p = str(i)
    p = p.replace("(","").replace(",","").replace(")","")
    print(p)