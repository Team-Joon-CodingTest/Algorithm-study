from collections import deque
qs, s = map(int, input().split())

sary = list(map(int, input().split()))

q = deque()
for i in range(1, qs + 1):
    q.append(i)

m = 0
result = 0
cnt = 0
while sary:
    if q[0] == sary[0]:
        q.popleft()
        sary.pop(0)
    else:
        c1 = q.index(q[-1]) - q.index(sary[0])   # 마지막 인덱스 - 찾으려는 수의 인덱스
        c2 = q.index(sary[0])                    # 찾으려는 수의 인덱스 - 큐의 첫번째 인덱스(0)

        if c1 < c2:   # 찾고자 하는 값이 큐의 마지막 인덱스와 더 가깝다면
            while q[0] != sary[0]:
                q.rotate(1)
                cnt += 1
        else:
            while q[0] != sary[0]:
                q.rotate(-1)
                cnt += 1
print(cnt)
