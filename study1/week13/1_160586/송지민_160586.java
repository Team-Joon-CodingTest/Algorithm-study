// 접근
// -
//
// 구현
// -
import java.util.*;
class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
        int[] minArr = new int[26];
       	Arrays.fill(minArr, 102);

        for(String s : keymap) {
            int N = s.length();
            for(int i = 0; i < N; i++) {
                int index = s.charAt(i) - 'A';
                minArr[index] = Math.min(minArr[index], i + 1);
            }
        }

        int idx = 0;
        for(String s : targets) {
            int N = s.length();
            int count = 0;
            for(int i = 0; i < N; i++) {
                int index = s.charAt(i) - 'A';
                if(minArr[index] == 102) {
                    count = -1;
                    break;
                }
                else
                    count += minArr[index];
            }
            answer[idx++] = count;
        }
        return answer;
    }
}

