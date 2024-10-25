def solution(numbers):
    stack = []
    # 일단 냅다 -1로 다 초기화 -> 왜냐하면 모두 뒷 큰 수가 없다 가정하고 그 뒤에 있으면 뒷 큰 수로 초기화 시키면 됨.
    answer = [-1] * len(numbers)
    for i, num in enumerate(numbers):
        # 스택이 비어있지 않고, 스택 맨 위 인덱스의 numbers 값이 현재 numbers 인덱스의 값보다 작다면?
        while stack and numbers[stack[-1]] < num:
            index = stack.pop()
            answer[index] = num
        stack.append(i)
    return answer