import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n, m = map(int, input().split())

    for i in range(m):
        a, b = map(int, input().split())
    print(n-1) # 모든 국가가 이어져있기 때문에 n-1이 비행기 종류 최소 개수