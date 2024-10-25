import sys
input = sys.stdin.readline

n = int(input())
dict = {}

for _ in range(n):
    a, b = map(str, input().split())

    if b == "enter": 
        dict[a] = b # enter라면 딕셔너리로 매핑
    else:
        del dict[a] # leave(퇴근)이라면 해당 딕셔너리 삭제

dict = sorted(dict.keys(), reverse=True) # 사전 순의 역순으로 정렬

for i in dict:
    print(i)
