// 몸무게가 가장 작은 사람과 큰 사람과 짝짓기 (최대 2명;;)
import java.util.*;

class Solution {
    public int solution(int[] people, int limit) {
        int answer = 0;

        Arrays.sort(people); // [50, 50, 70, 80]
        int start = 0;
        int end = people.length - 1;

        while(start <= end) {
            // 2명씩 구조
            if ((people[start] + people[end]) <= limit) {
                start++;
                end--;
            }
            else {
                end--;
            }
            answer++;
        }
        return answer;
    }
}