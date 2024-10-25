class Solution {
    public static int[] dr = {0,-1,0,1};
    public static int[] dc = {-1,0,1,0};
    public static int result = 0;
    public int closedIsland(int[][] grid) {
        int R = grid.length;
        int C = grid[0].length;

        boolean[][] visited = new boolean[R][C];
        for(int i = 1; i < R - 1; i++) {
            for(int j = 1; j < C - 1; j++) {
                if(grid[i][j] == 0 && !visited[i][j]) {
                    bfs(i,j, visited, grid);
                }
            }
        }

        return result;
    }

    private void bfs(int x, int y, boolean[][] visited, int[][] grid) {
        Queue<Island> q = new LinkedList();
        q.offer(new Island(x,y));
        visited[x][y] = true;
        boolean flag = true;

        while(!q.isEmpty()) {
            Island island = q.poll();
            int r = island.r;
            int c = island.c;
            for(int i = 0; i < 4; i++) {
                int nr = r + dr[i];
                int nc = c + dc[i];

                if(nr < 1 || nr >= grid.length|| nc < 1 || nc >= grid[0].length|| visited[nr][nc]) {
                    flag = false;
                    continue;
                }
                if(grid[nr][nc] == 0) {
                    q.offer(new Island(nr,nc));
                    visited[nr][nc] = true;
                }
            }
        }
        if(flag)
            result++;
    }
}

class Island {
    int r;
    int c;

    Island(int r, int c) {
        this.r = r;
        this.c = c;
    }
}