N = int(input())

ary = [[' ']*(4*N-3) for i in range(4*N-3)]

def recursive(n, x, y):
    if n == 1:
        ary[x][y] = '*'
        return
    for i in range(4*n-3):
        ary[x][y+i] = '*'
    for i in range(4*n-3):
        ary[x+i][y] = '*'
    for i in range(4*n-3):
        ary[x+i][y+4*n-3-1] = '*'
    for i in range(4*n-3):
        ary[x+4*n-3-1][y+i] = '*'
    recursive(n-1, x+2, y+2)


recursive(N, 0, 0)
for i in range(len(ary)):
    print(''.join(ary[i]))
