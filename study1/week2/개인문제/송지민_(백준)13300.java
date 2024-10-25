import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());
        int[][] arr = new int[7][K];

        for(int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            int S = Integer.parseInt(st.nextToken());
            int Y = Integer.parseInt(st.nextToken());

            arr[Y][S]++;
        }

        int result = 0;
        for(int i = 1; i <= 6; i++) {
            for(int j = 0; j < K; j++) {
                result += arr[i][j] / K;
                if(arr[i][j] % K != 0) result++;
            }
        }

        System.out.println(result);
    }

}