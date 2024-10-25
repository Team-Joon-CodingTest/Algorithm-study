//접근
// - 그냥 bfs, dfs 문제
//
//구현
// - bfs

import java.util.*;
class Solution {
    static int[] dr = {0,-1,0,1};
    static int[] dc = {-1,0,1,0};
    static boolean[][] visited;
    static String[][] map;
    static LinkedList<Integer> list = new LinkedList();
    static int R;
    static int C;

    public int[] solution(String[] maps) {
        R = maps.length;
        C = maps[0].length();

        visited = new boolean[R][C];
        map = new String[R][C];

        for(int i = 0; i < R; i++) { // 문자열을 분할해 배열로 변경
            String[] str = maps[i].split("");
            for(int j = 0; j < C; j++) {
                map[i][j] = str[j];
            }
        }

        for(int i = 0; i < R; i++) {
            for(int j = 0; j < C; j++) {
                if(!map[i][j].equals("X") && !visited[i][j]) {
                    bfs(i,j);
                }
            }
        }

        int[] answer = new int[list.size()];
        for(int i = 0; i < answer.length; i++) {
            answer[i] = list.get(i);
        }

        Arrays.sort(answer);
        if(answer.length == 0) answer = new int[] {-1};
        return answer;
    }

    private void bfs(int x, int y) {
        Queue<Island> q = new LinkedList();
        q.offer(new Island(x,y));
        visited[x][y] = true;
        int sum = 0;

        while(!q.isEmpty()) {
            Island l = q.poll();
            int r = l.r;
            int c = l.c;
            sum += Integer.parseInt(map[r][c]);

            for(int i = 0; i < 4; i++) {
                int nr = r + dr[i];
                int nc = c + dc[i];

                if(nr < 0 || nr >= R || nc < 0 || nc >= C || visited[nr][nc] || map[nr][nc].equals("X")) continue;
                q.offer(new Island(nr,nc));
                visited[nr][nc] = true;
            }
        }
        list.add(sum);
    }
}

// 무인도 클래스 생성
class Island {
    int r;
    int c;

    Island(int r, int c) {
        this.r = r;
        this.c = c;
    }
}