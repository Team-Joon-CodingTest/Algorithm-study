from collections import deque
qs, s = map(int, input().split())

sary = list(map(int, input().split()))

q = deque()
for i in range(1, qs + 1):
    q.append(i)

m = 0
result = 0
lr = 0
rr = 0
while sary:
    if q[0] not in sary:
        q.popleft()
    elif q[0] == sary[0]:
        q.popleft()
        sary.pop(0)
    else:
        c1 = q.index(sary[-1]) - q.index(sary[0])
        c2 = q.index(sary[0]) - q.index(q[0])
