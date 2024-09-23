'''
[dfs]
1. 연결유무, 방문여부로 dfs 실행
2. 연결되지 않는 도시를 방문할때는 주의 수를 증가
'''
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        visited = [False] * n
        provincesCnt = 0  # 주의 수

        def dfs(city):
            visited[city] = True
            # 현재 도시와 연결된 모든 도시에 대해 반복
            for nextCity in range(n):
                # 현재 도시와 다음 도시가 연결되어 있고, 다음 도시를 아직 방문하지 않았다면
                if isConnected[city][nextCity] == 1 and not visited[nextCity]:
                    # 다음 도시를 시작으로 깊이 우선 탐색 실행
                    dfs(nextCity)

        # 모든 도시를 시작점으로 하여 DFS 실행
        for city in range(n):
            # 만약 현재 도시를 방문하지 않았다면
            if not visited[city]:
                # 주의 수를 증가시키고 DFS 실행
                provincesCnt += 1
                dfs(city)

        return provincesCnt

         