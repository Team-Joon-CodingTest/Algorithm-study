import sys
input = sys.stdin.readline
n,m=map(int,input().split())

mtr=[]
cnt=[]
for i in range(n):
    mtr.append(input())
    
for a in range(n-7):
    for b in range(m-7):# 8*8로 자르기 위해, -7해준다
        w_index=0 # 흰색으로 시작
        b_index=0 # 검은색으로 시작
        for i in range(a,a+8):
            for j in range(b,b+8):
                if (i+j)%2==0:# 짝수라면
                    if mtr[i][j]!='W':# B이면
                        w_index+=1
                    else:# W이면
                        b_index+=1
                else:# 홀수라면
                    if mtr[i][j]!='W':# B이면
                        b_index+=1
                    else:
                        w_index+=1
                        
        cnt.append(w_index) #W로 시작할 때 경우의 수
        cnt.append(b_index) #B로 시작할 때 경우의 수
print(min(cnt))