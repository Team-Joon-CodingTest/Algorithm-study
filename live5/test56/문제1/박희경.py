import sys

input = sys.stdin.readline

while True:
    letter = list(map(str, input().rstrip()))
    if letter[0] == '.':
        break
    stack = []
    answer = "yes"
    for char in letter:
        if char == '(':
            stack.append(char)
        if char == ')':
            if len(stack) > 0:
                if stack.pop() != "(":
                    answer = "no"
            else:
                answer = "no"
        if char == '[':
            stack.append(char)
        if char == ']':
            if len(stack) > 0:
                if stack.pop() != "[":
                    answer = "no"
            else:
                answer = "no"
    if len(stack) != 0:
        answer = "no"
    print(answer)


"""
So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.
"""