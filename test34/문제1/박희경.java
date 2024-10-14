import java.util.*;

class Solution {
    public int[] solution(int[] sequence, int k) {
        int[] answer = new int[2];

        int start = 0;
        int end = 0;
        int sum = 0;
        int size = sequence.length;

        // 끝 점만 움직이기
        for (end = 0; end < sequence.length; end++) {
            sum += sequence[end];

            // 값이 커지면 시작점 움직이기
            while (end < sequence.length && sum > k) {
                sum -= sequence[start++];
            }
            if (sum == k) {
                if(size > (end - start)) {  // 짧은 길이로 갱신
                    size = end - start;
                    answer[0] = start;
                    answer[1] = end;
                }
            }
        }
        return answer;
    }
}