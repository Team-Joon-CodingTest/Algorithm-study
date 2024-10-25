import java.util.*;
class Solution {
    public int[] solution(int[] sequence, int k) {
        int[] answer = new int[]{0, sequence.length - 1};
        
        int low = 0;
        int high = 1;
        int sum = sequence[low];
        
        while(low < high) {
            if(sum == k) {
                change(low, high, answer);
                sum -= sequence[low];
                low++;
            }
            else if(sum > k) { // 합이 크면 low를 전진
                sum -= sequence[low];
                low++;
            }
            else if(high < sequence.length) { // 합이 작으면 high를 전진
                sum += sequence[high];
                high++;
            }
            else
                break;
        }
        return answer;
    }
    
    // if(이번에 찾은 부분 수열의 길이 < 지금까지 찾았던 가장 짧은 부분 수열의 길이) -> 갱신
    private void change(int low, int high, int[] answer) {
        if (high - low - 1 < answer[1] - answer[0]) {
            answer[0] = low;
            answer[1] = high - 1;
        }
    }
}
