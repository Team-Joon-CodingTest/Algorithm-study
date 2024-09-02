import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

test = int(input())
for t in range(test):
    def dfs(node, cnt):
        v[node] = 1  # 비행기 탔으면 표시하기

        for i in ary[node]:
            if v[i] == 0:
                cnt = dfs(i, cnt + 1)
        return cnt


    n, m = map(int, input().split())
    v = []
    ary = []
    for i in range(n + 1):
        v.append(0)
        ary.append([])

    for i in range(m):
        a, b = map(int, input().split())
        ary[a].append(b)
        ary[b].append(a)
    print(dfs(1, 0))