/*
스택 문제
스택에 인덱스를 넣는다.
비교해서 값을 넣고 마지막 값과 비교 작으면 넣지 않음
*/
import java.util.*;

class Solution {
    public int[] solution(int[] numbers) {
        int [] answer = new int[numbers.length];
        Stack<Integer> stack = new Stack<>();

        stack.push(0);
        for (int i = 1; i < numbers.length; i++) {
            // 현재 값이 최상단 값(stack.peek())보다 크면 뒤에서 큰 수
            while (!stack.isEmpty() && numbers[stack.peek()] < numbers[i]) {
                answer[stack.pop()] = numbers[i];
            }
            stack.push(i);
        }

        // 스택에 남은 인덱스들은 -1로
        while(!stack.isEmpty()) {
            answer[stack.pop()] = -1;
        }

        return answer;
    }
}