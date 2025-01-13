import sys

input = sys.stdin.readline

n, m = map(int, input().split())
chess = [list(map(str, input().rstrip())) for _ in range(n)]

cnt = []
for a in range(n - 7):
    for b in range(m - 7):
        white = 0
        black = 0
        for i in range(a, a + 8):
            for j in range(b, b + 8):
                # (0, 0), (0, 2), (2, 0) 이 같은 색이어야 함
                if (i + j) % 2 == 0:
                    if chess[i][j] != 'W':
                        white += 1
                    else:
                        black += 1
                else:
                    if chess[i][j] != 'W':
                        black += 1
                    else:
                        white += 1
        cnt.append(white)
        cnt.append(black)
print(min(cnt))
