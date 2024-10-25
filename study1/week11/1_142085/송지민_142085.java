//접근
// - enemy 배열의 길이가 10^6, NlogN 이상의 시간복잡도는 사용 x
// - 왠지 그리디로 풀 수 있을 것 같아서 그리디로 시도
// - 일단 무적권을 쓰지 않은 상태로 진행할 수 있는 라운드까지 진행
// - 지금까지 지나온 라운드 중 적이 제일 많았던 라운드부터 무적권 사용 처리를 해주면 그리디로 해결 가능하다고 생각
//
//구현
// - 위 풀이의 핵심은 만났던 적의 수의 저장, 정렬, 조회 작업 시 시간복잡도가 logN 이어야함
// - 처음에는 TreeMap을 사용해 구현을 시도했으나 삭제처리가 번거로워 우선순위 큐로 변경
// - 우선순유 큐를 사용해 N * logN으로 해결

import java.util.*;
class Solution {
    public int solution(int n, int k, int[] enemy) {
        int answer = 0;
        // 우선순위 큐 (내림차순)
        PriorityQueue<Integer> pQ = new PriorityQueue<>(Collections.reverseOrder());

        for(int i = 0; i < enemy.length; i++) { // N
            n -= enemy[i];
            pQ.offer(enemy[i]); // logN
            if(n < 0) {
                if(k > 0) {
                    n += pQ.poll(); // logN
                    k--;
                }
                else break;
            }
            answer++;
        }

        return answer;
    }
}