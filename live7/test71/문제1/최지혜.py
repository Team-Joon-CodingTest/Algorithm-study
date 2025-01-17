import sys
input = sys.stdin.readline

def bt():
    if len(array) == m:
        print(" ".join(map(str, array)))
        return
    
    for i in range(1, n+1):
        if i not in array:
            array.append(i)
            bt()
            array.pop()


n, m = map(int, input().split())
array = []

bt()