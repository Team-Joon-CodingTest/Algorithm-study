import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    k, w = input().rstrip().split()
    k = int(k)
    li = dict()
    for i in range(len(w) - k + 1):
        word = w[i:i + k]  # 문자열을 주어진 길이만큼 앞에서부터 자르기

        # cnt에 A G C T 의 count 값을 문자열로 저장
        cnt = str(word.count("A")) + str(word.count("G")) + str(word.count("C")) + str(word.count("T"))
        if cnt not in li.keys(): 
            li[cnt] = 1
        else:  # 같은 count이고 합성적으로 같다면
            li[cnt] += 1
    print(max(li.values()))
