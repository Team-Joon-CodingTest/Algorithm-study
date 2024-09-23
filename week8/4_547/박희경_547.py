class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        provinces = 0
        visited = set()

        for city in range(n):
            if city not in visited:
                self.dfs(isConnected, city, visited)
                provinces += 1

        return provinces

    def dfs(self, isConnected, city, visited):
        visited.add(city)
        n = len(isConnected)

        for neighbor in range(n):
            if isConnected[city][neighbor] == 1 and neighbor not in visited:
                self.dfs(isConnected, neighbor, visited)