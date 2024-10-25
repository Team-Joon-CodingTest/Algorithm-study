/*
BFS인 줄 알았으나.. 전체 탐색이 아니라서 bfs가 아니었다..
*/
import java.util.*;

class Solution {
    public int solution(String[][] board, int h, int w) {
        int answer = 0;
        int n = board.length;
        int[] dh = {-1, 1, 0, 0};
        int[] dw = {0, 0, -1, 1};

        for(int i = 0; i < 4; i++) {
            int h_check = h + dh[i];
            int w_check = w + dw[i];

            if(h_check >= 0 && h_check < n &&
                w_check >= 0 && w_check < n) {
                if(board[h][w].equals(board[h_check][w_check])) {
                    answer++;
                }
            }
        }
        return answer;
    }
}


/*
1차 시도
BFS
*/
import java.util.*;

class Solution {
    public int solution(String[][] board, int h, int w) {
        int answer = 0;
        Queue<Integer> q = new LinkedList<>();
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};
        boolean[][] visited = new boolean[board.length][board[0].length];

        bfs(h, w, board);

        public static void bfs(int h, int w, String[][] board) {
            q.offer(new int[]{h, w});
            visited[n][h] = true;
            while (!q.isEmpty()) {
                int[] arr = q.poll();
                int hValue = arr[0];
                int wValue = arr[1];

                for(int i = 0; i < 4; i++) {
                    int nh = hValue + dx[i];
                    int nw = wValue + dy[i];

                    if(nh >= 0 && nh < board.length &&
                            nw >= 0 && nw < board[0].length &&
                            !visited[nh][nw]) {
                        if(board[h][w].equals(board[nh][nw])) {
                            visited[nh][nw] = true;
                            answer++;
                            q.offer(new int[]{nh, nw});
                        }
                    }
                }
            }
        }
        return answer;
    }
}
