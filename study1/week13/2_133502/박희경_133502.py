"""
빵 1 야채 2 고기 3
스택?
"""
def solution(ingredient):
    answer = 0
    stack = []
    for i in ingredient:
        stack.append(i)
        if stack[-4:] == [1, 2, 3, 1]:
            answer += 1
            del stack[-4:]
    return answer