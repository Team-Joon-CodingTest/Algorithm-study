import sys
input = sys.stdin.readline
n, k = map(int, input().split())
# -----------------
dic = {}
findmax = []
for i in range(n):
    g, x = map(int, input().split())
    dic[x] = g
    findmax.append(x)
m = max(findmax)

albert = [0 for i in range(m+1)]

for i in range(len(albert)):
    if i in dic.keys():
        albert[i] = dic[i]
# ---------------- 각 위치에 맞게 양동이 놓기

a = 0
b = k*2+1   # 1일 경우: 3, 2일 경우: 5, 3일 경우: 7, 4일 경우: 9

many_ice = []

many_ice.append(sum(albert[a:b]))
temp = sum(albert[a:b])

while b < len(albert)-1:
    temp -= albert[a]
    temp += albert[b]
    a += 1
    b += 1

    many_ice.append(temp)

print(max(many_ice))