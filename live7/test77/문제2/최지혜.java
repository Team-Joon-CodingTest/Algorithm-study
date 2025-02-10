package live7.test77.문제2;

import java.io.*;
import java.util.*;

class Solution{
    public class Main {

        static int n, s, result = 0;
        static int[] subsequence;
    
        public static void main(String[] args) throws Exception{
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    
            n = Integer.parseInt(st.nextToken());
            s = Integer.parseInt(st.nextToken());
            subsequence = new int[n];
    
            st = new StringTokenizer(br.readLine(), " ");
            for (int i = 0; i<n; i++){
                subsequence[i] = Integer.parseInt(st.nextToken());
            }
    
            dfs(0, 0);
    
            if(s == 0){ // 원소를 선택하지 않으면 부분수열의 합이 0이라고 계산되는 오류 때문에
                result --;
            }
            System.out.println(result);
    
            bw.flush();
            bw.close();
            br.close();
    
        }
    
        public static void dfs(int depth, int sum){
            if (depth == n){
                if (sum == s){
                    result++;
                }
                return;
            }
            dfs(depth +1, sum + subsequence[depth]); // 원소를 선택했을 경우의 수열의 합
            dfs(depth + 1, sum); // 원소를 선택하지 않았을 경우의 수열의 합
        }
    }
    

}
