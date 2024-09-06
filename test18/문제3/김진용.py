import sys
input = sys.stdin.readline

r, c, q = map(int, input().split())

pixel = []
for i in range(1, r+1):
    pixel.append(list(map(int, input().split())))
dp = [[0]*(c+1) for _ in range(r+1)]
# print(pixel)
# print(dp)

# (0, 0)부터 (i, j)를 꼭짓점으로 하는 직사각형의 밝기 합 구하기
for i in range(1, r+1):
    for j in range(1, c+1):
        dp[i][j] = pixel[i-1][j-1] + dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]

# for i in range(r+1):
#     print(dp[i])


for _ in range(q):
    r1, c1, r2, c2 = map(int, input().split())
    a = (r2-(r1-1))*(c2-(c1-1))
    b = (dp[r2][c2] - dp[r1-1][c2] - dp[r2][c1-1] + dp[r1-1][c1-1])
    print(b//a)