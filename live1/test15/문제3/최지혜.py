from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
location = list(map(int, input().split())) # 뽑아내려고 하는 위치
dq = deque([i for i in range(1, n+1)])

count = 0
for i in location:
    while True: # 뽑을 때까지 계속
        if dq[0] == i: # 첫 인덱스가 뽑아내야하는 수의 위치와 같다면 1번 바로 수행
            dq.popleft() 
            break
        else:
            # 뽑아내려는 수의 위치 인덱스가 dq의 길이를 반으로 나눈 것보다 작을 때는 왼쪽으로 움직여야 최소
            # 오른쪽으로 갈지 왼쪽으로 갈지 결정하기 위함
            if dq.index(i) < len(dq)/2: 
                while dq[0] != i: # dq의 첫 인덱스가 i가 될 때까지 반복
                    dq.append(dq.popleft()) # 2번 연산 
                    count += 1
            else: # dq길이를 반으로 나눈 것보다 뽑아내려는 수의 위치 인덱스가 크다면 오른쪽으로 움직임
                while dq[0] != i:
                    dq.appendleft(dq.pop()) # 3번 연산
                    count += 1

print(count)