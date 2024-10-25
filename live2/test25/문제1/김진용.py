
def dfs(a, b):
    if b == 1:
        return

    for i in range(a + b//3, a + (b//3)*2):
        s[i] = ' '

    dfs(a, b//3)
    dfs(a + (b//3)*2, b//3)


while(True):
    try:
        n = int(input())
        s = list('-' * 3 ** n)
        dfs(0, 3**n)
        print(''.join(s))

    except:
        break