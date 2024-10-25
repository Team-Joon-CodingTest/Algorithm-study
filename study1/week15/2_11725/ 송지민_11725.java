import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
    public static boolean[] visited;
    public static ArrayList<Integer>[] list;
    public static int[] parentArr;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int N = Integer.parseInt(br.readLine());
        visited = new boolean[N+1];
        list = new ArrayList[N+1];
        parentArr = new int[N+1];
        for(int i = 1; i <= N; i++ ) list[i] = new ArrayList<>();
        for(int i = 1; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            int n1 = Integer.parseInt(st.nextToken());
            int n2 = Integer.parseInt(st.nextToken());
            list[n1].add(n2);
            list[n2].add(n1);
        }

        for(int i = 1; i <= N; i++) {
            if(!visited[i]) dfs(i);
        }

        for(int i = 2; i <=N; i++) {
            System.out.println(parentArr[i]);
        }

    }
    private static void dfs(int parent) {
        if(visited[parent]) return;
        visited[parent] = true;

        for(int child : list[parent]) {
            if(!visited[child]) {
                parentArr[child] = parent;
                dfs(child);
            }
        }
    }
}