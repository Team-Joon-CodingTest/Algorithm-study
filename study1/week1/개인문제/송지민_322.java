class Solution {
    public int coinChange(int[] coins, int amount) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(0);
        int result = 0;
        boolean[] visited = new boolean[amount + 1];

        while(!q.isEmpty()) {
            int N = q.size();
            for(int i = 0; i < N; i++) {
                int sum = q.poll();
                if(sum == amount) {
                    return result;
                }
                if(sum > amount || visited[sum]) {
                    continue;
                }

                visited[sum]=true; // 방문 처리
                for(int coin:coins) {
                    q.offer(sum + coin);
                }
            }
            result++; // 코인 개수 증가
        }
        return -1;
    }
}

// bfs, 그리디로 풀려다 실패