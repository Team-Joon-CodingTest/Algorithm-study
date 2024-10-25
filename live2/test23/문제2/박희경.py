import sys
from collections import defaultdict

input = sys.stdin.readline

t = int(input()) 


for _ in range(t):
    dict = defaultdict(list)  # 기본값이 리스트인 딕셔너리
    n = int(input())    # 의상 수
    for _ in range(n):
        name, type = map(str, input().split())
        
        dict[type].append(name)

    cnt = 1

    for key in dict.keys():
        cnt *= len(dict[key]) + 1   # 해당 의상 종류의 의상을 입지 않는 경우를 위해 1 더한다.
    
    print(cnt - 1)  # 아무것도 안 입는 경우를 제외한다.
