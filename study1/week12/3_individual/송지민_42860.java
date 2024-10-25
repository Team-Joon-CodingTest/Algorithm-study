class Solution {
    public int solution(String name) {
        int[] dis = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,12,11,10,9,8,7,6,5,4,3,2,1};
        int answer = 0;
        int N = name.length();
        int move = N - 1;

        for(int i = 0; i < N; i++) {
            // 알파벳 바꾸는 횟수
            char alpha = name.charAt(i);
            char A = 'A';
            int index = alpha - A;
            answer += dis[index];

            // 커서 이동 횟수
            index = i + 1;
            // 연속된 A의 갯수
            while(index < N && name.charAt(index) == 'A'){
                index++; // 연속된 A의 마지막 인덱스 값을 가지게 됨
            }
            // 현재 왼쪽으로 되돌아가는 것이 빠른지 판단
            move = Math.min(move, i * 2 + N - index);
            // BBBBAAAAAAAB 와 같이, 처음부터 뒷부분을 먼저 입력하는 것이 더 빠른 경우까지 고려
            move = Math.min(move, (N - index) * 2 + i);
        }
        return answer + move;
    }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42860