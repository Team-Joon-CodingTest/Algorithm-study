class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        map = [[] for _ in range(n)]
        visit = [False for _ in range(n)]

        for connection in connections:
            a = connection[0]
            b = connection[1]

            map[a].append(b)
            map[b].append(-a)

        def dfs(node: int):
            visit[node] = True
            answer = 0

            for n in map[node]:
                if visit[abs(n)] == False:
                    if n >= 0:
                        answer += 1
                    answer += dfs(abs(n))

            return answer

        return dfs(0)