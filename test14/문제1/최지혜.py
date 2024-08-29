import sys
input = sys.stdin.readline

st1 = list(input().rstrip())  # 첫째 줄에 입력받은 문자열 (커서 기준 왼쪽)
st2 = []  # 커서 기준 오른쪽

for _ in range(int(input().strip())):
    command = input().split()
    if command[0] == 'L':  # L이면 st1에서 pop하고 st2에 추가함으로써 커서가 왼쪽으로 한칸 옮긴 것처럼 표현
        if st1:
            st2.append(st1.pop())
    elif command[0] == 'D':  # D이면 st2에서 pop하고 st1에 추가함으로써 커서가 오른쪽으로 한칸 옮긴 것처럼
        if st2:
            st1.append(st2.pop())
    elif command[0] == 'B':  # B이면 st1에서 pop하고 왼쪽에 있는 문자가 삭제된 것처럼
        if st1:
            st1.pop()
    else:
        st1.append(command[1])  # P $이면 st1에 추가되게끔 함으로써 커서 왼쪽에 문자가 추가된 것처럼 표현

st1.extend(reversed(st2))  # st1에 st2를 뒤집어서 추가
print(''.join(st1))  # 하나의 문자열로 만들어서 출력
