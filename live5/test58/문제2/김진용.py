from collections import deque

n = int(input())
ary = list(map(int, input().split()))

q = deque()

for i in range(len(ary)):
    q.append([i+1, ary[i]])

result = []
while q:
    # print(q)
    a, b = q[0][1], q[0][0]
    result.append(b)
    q.popleft()
    if a < 0:
        q.rotate(-a)
    elif a > 0:
        q.rotate(-(a - 1))
print(*result)