import java.io.*;
import java.util.*;

public class Main {
    static int N;
    static int M;
    static boolean[][] map;
    static boolean[][] visited;
    static int dr[] = {-1, 1, 0, 0};
    static int dc[] = {0, 0, -1, 1};
    static int max;
    static int count;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());

        map = new boolean[N][M];
        visited = new boolean[N][M];
        max = 0;
        count = 0;

        for (int i = 0; i < k; i++) {
            st = new StringTokenizer(br.readLine());
            int r = Integer.parseInt(st.nextToken()) - 1;
            int c = Integer.parseInt(st.nextToken()) - 1;
            map[r][c] = true;
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (!visited[i][j] && map[i][j]) { // 방문 안한 음쓰를 만났을 때
                    dfs(i, j);
                    max = Math.max(max, count);
                    count = 0;
                }
            }
        }

        System.out.println(max);
    }

    private static void dfs(int r, int c) {
        visited[r][c] = true;
        count++;

        for (int i = 0; i < 4; i++) {
            int nr = r + dr[i];
            int nc = c + dc[i];

            if (nr >= 0 && nc >= 0 && nr < N && nc < M) {
                if (!visited[nr][nc] && map[nr][nc]) {
                    dfs(nr, nc);
                }
            }
        }
    }
}
