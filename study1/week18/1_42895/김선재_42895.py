from itertools import product

def solution(N, number):
    S = [set() for _ in range(9)]

    if N == number:
        return 1

    for i in range(1,9):
        S[i].add(int(str(N)*i))
        # S[1] = {N}
        # S[2] = {NN, N+N, N-N, N*N, N/N}
        # S[3] = {NNN, N+N(N), …}
        for j in range(1,i+1):
            for a,b in product(S[j],S[i-j]):
                S[i].add(a+b)
                S[i].add(a-b)
                S[i].add(a*b)
                if b != 0:
                    S[i].add(a//b)
        if number in S[i]:
            return i
    return -1