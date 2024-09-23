class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        List<Integer> visited = new ArrayList<>();

        dfs(visited, rooms, 0); // 0번 방부터

        if(visited.size() == rooms.size()) return true;
        return false;
    }

    void dfs(List<Integer> visited, List<List<Integer>> rooms, int roomNum) {
        visited.add(roomNum);
        List<Integer> keys = rooms.get(roomNum); // 방 번호에 있는 키 리스트

        for(int i = 0; i < keys.size(); i++) {
            int idx = keys.get(i);
            if(!visited.contains(idx)) dfs(visited, rooms, idx);
        }
    }
}
