'''
콤비네이션 문제.
파이썬 라이브러리 활용하여 해결할 수 있어보임
'''
import sys
from itertools import combinations

while True:
    input = sys.stdin.readline

    S = list(map(int, input().split(" ")))

    if S[0] == 0:
        break
    
    S = list(S[1:]) # 중복제거
    lotto = list((combinations(S, 6))) # S에서 6개를 뽑음

    for com in lotto:
        print(' '.join(map(str, sorted(list(com)))))  # 출력형식에 맞춰줌

    print()  # 테스트 케이스 줄바꿈
