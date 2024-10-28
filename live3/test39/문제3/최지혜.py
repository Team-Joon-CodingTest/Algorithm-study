n = int(input())
roma = [1, 5, 10, 50]
arr = [0] * 1001
num = 0


def dfs(cur, start):
    global num
    if cur == n:
        arr[num] = 1
        return
    
    for i in range(start, 4):
        num += roma[i]
        dfs(cur+1, i)
        num -= roma[i]



dfs(0, 0)
print(sum(arr))