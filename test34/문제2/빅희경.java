// 투포인터가 아닌 스택 문제라고 함..
import java.util.*;

class Solution {
    public List solution(int[] numbers) {
        List<Integer> answer = new ArrayList<>();

        int start = 0;
        int end = 0;
        int maxNum = 0;

        for (end = start; end < numbers.length; end++) {

            if (numbers[start] < numbers[end]) {
                answer.add(numbers[end]);
                start++;
            }
//            else {
//                answer.add(-1);
            }
        }
        return answer;
    }
}