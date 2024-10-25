import java.io.*;
import java.util.*;

public class Main {
  static int N, M, count, result;
  static int[] dr = { -1, 0, 1, 0 };
  static int[] dc = { 0, 1, 0, -1 };

  static int[][] map;
  static Queue<int[]> q = new LinkedList<int[]>();
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;

    st = new StringTokenizer(br.readLine());

    M = Integer.parseInt(st.nextToken());
    N = Integer.parseInt(st.nextToken());
    count = 0;
    result = 0;

    map = new int[N][M];

    for(int i = 0; i < N; i++) {
      st = new StringTokenizer(br.readLine());
      for(int j = 0; j < M; j++) {
        int input = Integer.parseInt(st.nextToken());
        map[i][j] = input;
        if(input == 1) {
          q.offer(new int[] {i,j});
        }
        else if(input == 0) {
          count++;
        }
      }
    }

    bfs();
    System.out.println(count == 0 ? result : -1);
  }

  static void bfs() {
    while(count > 0 && !q.isEmpty()) {
      int size = q.size();
      for(int s = 0; s < size; s++) { // 주기 생성용
        int[] tomato = q.poll();

        for(int i = 0; i < 4; i++) {
          int nr = tomato[0] + dr[i];
          int nc = tomato[1] + dc[i];

          if(nr < 0 || nr >= N || nc < 0 || nc >= M || map[nr][nc] != 0) {
            continue;
          }

          count--;
          map[nr][nc] = 1;
          q.offer(new int[] {nr, nc});
        }
      }
      result++;
    }
  }
}
