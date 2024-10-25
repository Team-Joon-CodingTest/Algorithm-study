import sys
input = sys.stdin.readline

n = int(input())

ary = list(map(int, input().split()))
mistake_ary = []
mistake_ary.append(0)           # 첫 수 실수 갯수 저장
s = 0
for i in range(len(ary)-1):     # 1부터 i 까지 실수 갯수를 mistake_ary에 저장
    if ary[i] > ary[i+1]:
        s += 1
    else:
        s = s
    mistake_ary.append(s)

# print(mistake_ary)
mistake_ary.append(0)
test = int(input())

for t in range(test):
    x, y = map(int, input().split())
    print(mistake_ary[y-1] - mistake_ary[x-1])  # y까지의 실수 갯수 - x 까지의 실수 갯수
