def solution(X, Y):
    dic = {"0": X.count("0"), "1": X.count("1"), "2": X.count("2"), "3": X.count("3"), "4": X.count("4"), "5": X.count("5"), "6": X.count("6"), "7": X.count("7"), "8": X.count("8"), "9": X.count("9")}
    for x in X:
        dic[x] = Y.count(x)
    print(dic)

print(solution("5525", "1255"))
