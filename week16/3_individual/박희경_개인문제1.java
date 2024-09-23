/*
재귀+스택 사용했더니 시간초과
Integer 했더니 런타임에러 -> Long 타입으로

1. 0을 기준으로 sb 문자열 자르기
2. sb 문자열을 정수형으로 형변환
3. 숫자 배열에 넣고 소수 여부 판단하여 카운팅
*/
import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(int n, int k) {
        int answer = 0;
        StringBuilder sb = new StringBuilder();

        // n을 k진법으로 변환
        while (n > 0) {
            sb.append(n % k);
            n /= k;
        }

        // 변환된 수를 역순으로 처리
        sb.reverse();

        // 0을 기준으로 split하여 숫자 배열 생성
        for (String numStr : sb.toString().split("0")) {
            if (!numStr.isEmpty() && isPrime(Long.parseLong(numStr))) {
                answer++;
            }
        }

        return answer;
    }

    public boolean isPrime(long num) {
        if (num < 2)
            return false;
        for (long i = 2; i * i <= num; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }
}
