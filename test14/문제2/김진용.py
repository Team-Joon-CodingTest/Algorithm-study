while True:
    s = input()
    ary = []
    p = 0

    if s == '.':
        break

    while p < len(s) - 1:
        if s[p] == '[' or s[p] == '(':
            ary.append(s[p])
        elif s[p] == ']':
            if len(ary) != 0 and ary[-1] == '[':
                ary.pop()
            else:
                ary.append(s[p])
                break
        elif s[p] == ')':
            if len(ary) != 0 and ary[-1] == '(':
                ary.pop()
            else:
                ary.append(s[p])
                break
        p += 1
    if len(ary) == 0:
        print('yes')
    else:
        print('no')


 ([ (([( [ ] ) ( ) (( ))] )) ]).

 #