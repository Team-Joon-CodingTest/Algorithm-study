from itertools import permutations

n = input()
# 입력받은 문자열로 가능한 모든 순열을 구하고, 정렬하여 리스트로 변환
perm = sorted(list(permutations(n, len(n)))) 

found = False

for i in perm:
    # 현재 순열이 입력값 n보다 큰 경우
    if n < ''.join(i):
        print(''.join(i))
        found = True
        break

# 만약 n보다 큰 순열을 찾지 못한 경우 0 출력
if not found:
    print(0)