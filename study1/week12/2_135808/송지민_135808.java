// 접근
// - score 길이가 10^6, 완탐 불가
// - 상자의 가격을 결정하는 기준은 상자 안 사과의 최저 점수, 다른 사과들의 점수는 의미x
// - 상자 안 사과의 최저점과 최고점의 차이가 크다면 무조건 손해, 따라서 정렬을 통해 차이를 최대한 줄이면 그리디로 해결 가능
//
// 구현
// - 사과를 점수순으로 정렬한 후 상자 안 최저점 사과들만 확인하며 전제 점수를 계산

import java.util.*;
class Solution {
    public int solution(int k, int m, int[] score) {
        int answer = 0;
        Arrays.sort(score);

        for(int i = score.length - m; i >= 0; i-=m) {
            answer += score[i] * m;
        }
        return answer;
    }
}