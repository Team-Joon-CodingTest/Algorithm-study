import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static int[][] input;

    static int[] dx = { -1, 0, 1, 0 };
    static int[] dy = { 0, -1, 0, 1 };

    static int N, M;
    static int safeCount = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st;

        st = new StringTokenizer(br.readLine(), " ");
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        input = new int[N][M];

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            for (int j = 0; j < M; j++) {
                input[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        DFS(0);
        System.out.println(safeCount);

    }

    static void DFS(int wall) {
        int a = 0;
        if (wall == 3) {
            BFS();
            return;
        }
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (input[i][j] == 0) {
                    input[i][j] = 1;
                    DFS(wall + 1);
                    input[i][j] = 0;
                }
            }
        }
    }

    static void BFS() {
        Queue<Node> q = new LinkedList();
        int[][] copy = new int[N][M];

        for (int i = 0; i < N; i++) {
            copy[i] = input[i].clone();
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (input[i][j] == 2) {
                    q.add(new Node(i, j));
                }
            }
        }

        while (!q.isEmpty()) {
            Node virus = q.poll();
            int x = virus.x;
            int y = virus.y;

            for (int k = 0; k < 4; k++) {
                int nx = x + dx[k];
                int ny = y + dy[k];

                if (0 <= nx && nx < N && 0 <= ny && ny < M) {
                    if (copy[nx][ny] == 0) {
                        q.add(new Node(nx, ny));
                        copy[nx][ny] = 2;
                    }
                }
            }
//			for (int i = 0; i < N; i++) {
//				for (int j : copy[i]) {
//					System.out.print(j);
//				}
//				System.out.println();
//			}
        }

        int max = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (copy[i][j] == 0) {
                    max++;
                }
            }
            safeCount = Math.max(max, safeCount);
        }

    }

    static class Node {
        int x;
        int y;

        Node(int x, int y) {
            this.x = x;
            this.y = y;
        }

    }
}
