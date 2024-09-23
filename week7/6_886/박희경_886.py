class Solution:
    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:
        graph = defaultdict(list)
        for u, v in dislikes:
            graph[u].append(v)
            graph[v].append(u)

        group = {}
        def dfs(node, v):
            if node in group:
                return group[node] == v
            group[node] = v
            for nei in graph[node]:
                if not dfs(nei, v ^ 1):
                    return False
            return True

        for i in range(1, n + 1):
            v = group[i] if i in group else True
            if not dfs(i, v):
                return False
        return True