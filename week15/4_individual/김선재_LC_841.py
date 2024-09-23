'''
[dfs]
1. 방문 배열 생성
2. 해당 방에서 얻을수 있는 열쇠로 dfs 재귀적으로 호출
3. 방문 배열 길이 == rooms.length -> True
'''

class Solution(object):
    def canVisitAllRooms(self, rooms):
        """
        :type rooms: List[List[int]]
        :rtype: bool
        """
        visited = []
        
        def dfs(room):
            if room in visited:
                return
            
            visited.append(room)

            for key in rooms[room]:
                dfs(key)

        dfs(0)

        return len(visited) == len(rooms) 

