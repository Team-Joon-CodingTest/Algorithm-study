package live7.test78.문제1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 최지혜 {
    static int [] dx = {-1,0,1,0};
    static int []dy = {0,1,0,-1};
    static char [][]map;
    static boolean [][]visit;
    static int r;
    static int c;
    static int []ans = new int[2];
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        r = Integer.parseInt(st.nextToken());
        c = Integer.parseInt(st.nextToken());

        map = new char[r][c];
        visit = new boolean[r][c];

        int s = 0; // 살아남은 양의 수
        int w = 0; // 살아남은 늑대의 수

        // map 정보
        for(int i=0; i<r; i++){
            String temp = br.readLine();
            for(int j = 0; j<c; j++){
                map[i][j] = temp.charAt(j);
            }
        }
        for(int i=0; i<r; i++){
            for(int j=0; j<c; j++){
                // 방문하지 않았고 울타리가 아닌 칸에서 시작
                if(!visit[i][j] && !(map[i][j] == '#')){
                    ans[0] = ans[1]=0;
                    int[]x = dfs(i,j);
                    // 양이나 늑대가 있는 영역인 경우
                    if(!(x[0] == 0 && x[1] == 0)){
                        if(x[1] >= x[0]){ // 늑대가 양보다 많거나 같으면
                            w += x[1]; // 늑대가 살아남은
                        }
                        else if(x[1] < x[0]){ // 양이 늑대보다 많으면
                            s += x[0]; // 양이 살아남음
                        }
                    }
                }
            }
        }
        System.out.println(s);
        System.out.println(w);
    }
    static int[] dfs(int x, int y){
        visit[x][y] = true;
        if(map[x][y] == 'o'){ // 현재 위치에 양이 있으면 양의 수 증가
            ans[0]++;
        }
        if(map[x][y] == 'v'){ // 현재 위치에 늑대가 있으면 늑대의 수 증가
            ans[1]++;
        }

        for(int i=0; i<4; i++){
            int nx = x +dx[i];
            int ny = y + dy[i];

            if(nx <0 || ny <0 || nx >=r || ny>=c) continue; // map 범위를 넘어가면 skip
            if(visit[nx][ny] || map[nx][ny]=='#') continue; // 이미 방문했거나 울타리면 skip
            dfs(nx, ny);
        }
        return ans;
    }
}
