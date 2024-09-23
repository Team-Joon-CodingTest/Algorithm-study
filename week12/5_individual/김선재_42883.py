'''
[그리디]
1. number 배열에 숫자 한개씩 스택에 넣음
2. peek < 탐색한 숫자 일때 스택에 넣음
3. 남은 k처리
'''
def solution(number, k):
    # 맨 앞자리 스택에 넣어줌
    stack = [number[0]]

    # number 배열을 탐색
    for curr in number[1:]:
        while len(stack) > 0 and k > 0 and stack[-1] < curr :
            stack.pop()
            k -= 1
        stack.append(curr)

    # 배열을 순회하고 k가 남아있다면 끝에서 부터 k개 만큼 제거
    if k != 0 :
        stack = stack[:-k]
    
    return ''.join(stack)


