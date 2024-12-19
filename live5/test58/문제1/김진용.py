# 1. 현재 인덱스의 요소와 다음 인덱스의 요소가 같으면 한 쌍 만들어진거 표시
# 2. 현재 인덱스의 요소와 다음 인덱스의 요소가 다르면 다음 인덱스의 요소와 다다음인덱스 요소 비교 -> 다르면 바로 탈락
#     -> 같을 경우 일단 킾 하고 현재 인덱스의 요소와 다다다음 인덱스 요소를 비교
# 3. 문자열 길이가 홀수면 바로 패스..??
n = int(input())

result = 0
for _ in range(n):
    string = list(input())
    stk = []
    for i in string:
        if len(stk) != 0 and stk[-1] == i:
            stk.pop()
        else:
            stk.append(i)
    if len(stk) == 0:
        result += 1
print(result)
