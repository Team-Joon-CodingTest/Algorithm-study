import java.util.*;
class Solution {
    static int R,C;
    static boolean[][] visited;
    static int[][] picture;
    static int[] dr = {0,1,0,-1};
    static int[] dc = {-1,0,1,0};
    public int[] solution(int m, int n, int[][] picture) {
        int numberOfArea = 0;
        int maxSizeOfOneArea = 0;
        int[] answer = new int[2];
        
        R = picture.length;
        C = picture[0].length;
        visited = new boolean[R][C];
        this.picture = picture;

        for(int i = 0; i < R; i++) {
			for(int j = 0; j < C; j++) {
                if(this.picture[i][j] != 0 && !visited[i][j]) {
                    maxSizeOfOneArea = Math.max(maxSizeOfOneArea, bfs(i,j,picture[i][j]));
                    numberOfArea++;
                }
            }
        }
        answer[0] = numberOfArea;
        answer[1] = maxSizeOfOneArea;
        return answer;
    }
    
    private int bfs(int i, int j, int color) {
        Queue<int[]> q = new LinkedList();
        q.add(new int[]{i,j});
        visited[i][j] = true;
        int count = 1;
        
        while(!q.isEmpty()) {
            int[] arr = q.poll();
            int r = arr[0];
            int c = arr[1];
            for(int x = 0; x < 4; x++) {
                int nr = r + dr[x];
                int nc = c + dc[x];
                if(nr < 0 || nr >= R || nc < 0 || nc >= C 
                   || visited[nr][nc] || picture[nr][nc] != color) continue;
                q.offer(new int[]{nr,nc});
                visited[nr][nc] = true;
                count++;
            }
        }
        return count;
    }
}
