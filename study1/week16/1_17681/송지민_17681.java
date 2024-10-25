import java.util.*;
class Solution {
    public String[] solution(int N, int[] arr1, int[] arr2) {
        String[] answer = new String[N];
        boolean[][] map = new boolean[N][N];
        for(int i = 0; i < N; i++) {
            String str = toBinaryString(arr1[i],N);
            String walls = "";
            for(int j = 0; j < N; j++) {
                char c = str.charAt(j);
                if(c == '1') map[i][j] = true;
            }
        }
        
        for(int i = 0; i < N; i++) {
            String str = toBinaryString(arr2[i],N);
            String walls = "";
            for(int j = 0; j < N; j++) {
                char c = str.charAt(j);
                if(c == '1') map[i][j] = true;
            }
        }
        
        for(int i = 0; i < N; i++) {
            String str = "";
            for(int j = 0; j < N; j++) {
                if(map[i][j]) str += "#";
                else str += " ";
            }
            answer[i] = str;
        }
        return answer;
    }
    
    static String toBinaryString(int r, int N) {
        String str = "";
        for(int i = 0; i < N - 1; i++) {
            int num = r%2;
            if(num == 0) str += "0";
            else str += "1";
            r /= 2;
        }
        str += Integer.toString(r);
        
        String result = "";
        for(int i = N - 1; i >= 0; i--) {
            result += str.charAt(i);
        }
        return result;
    }
}
