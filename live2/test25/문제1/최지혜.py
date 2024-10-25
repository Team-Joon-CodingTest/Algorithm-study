import sys
input = sys.stdin.readline

def cut(a, n):
    if n==1:
        return
    for i in range(a + n//3, a+(n//3)*2): # 가운데 문자열을 공백으로 만들기
        arr[i] = ' '

while True:
    n = int(input())
    arr = ['-']*(3**n)
