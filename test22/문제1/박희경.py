import sys

input = sys.stdin.readline

n, m = map(int, input().split())
pattern = []
for _ in range(n):
    pattern.append(input().rstrip())

cnt = []
for a in range(n - 7):  # 범위 맞추기 위해서
    for b in range(m - 7):
        white = 0  # 흰색으로 시작
        black = 0  # 검정색으로 시작
        for i in range(a, a + 8):  # a부터 8개
            for j in range(b, b + 8):
                if (i + j) % 2 == 0:  # 처음 색과 같아야 함 ex) (0,0) 과 (0,2) 가 같은 색
                    if pattern[i][j] != 'W':    # 같아야 하는데 다르니까 카둔팅
                        white += 1
                    if pattern[i][j] != 'B':
                        black += 1
                else:   # 달라야 함 (반대)
                    if pattern[i][j] != 'W':
                        black += 1
                    else:
                        white += 1
        cnt.append(white)   # 'W'로 시작할 경우 바뀐 체스판 수
        cnt.append(black)

print(min(cnt))
