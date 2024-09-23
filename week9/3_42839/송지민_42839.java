import java.util.*;
class Solution {
    static HashSet<Integer> set = new HashSet<>();
    static String[] alpa;
    static boolean[] visited;
    public int solution(String numbers) {
        int answer = 0;
        alpa = numbers.split("");
        visited = new boolean[alpa.length];

        backtracking("",0);
        answer = set.size();
        return answer;
    }

    static void backtracking(String str, int depth){
        int num = 0;
        if(!str.equals("")) {
            num = Integer.parseInt(str);
            if(isSosu(num)) set.add(num);
        }
        if(depth == alpa.length){
            return;
        }
        for(int i = 0; i < alpa.length; i++){
            if(visited[i]) continue;
            visited[i] = true;

            backtracking(str+alpa[i], depth+1);

            visited[i] = false;
        }
    }

    static boolean isSosu(int num) {
        if(num == 1 || num == 0) return false;
        for(int i = 2; i < num; i++) {
            if(num % i == 0) {
                return false;
            }
        }
        return true;
    }
}