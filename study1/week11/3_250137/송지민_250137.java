// 접근
// - 체력 계산법을 찾으면 무의미한 반복 없이 attacks 배열만큼만 반복해서 해결 할 수도 있을 것 같기도 함
// - 조건이 복잡하지 않아서 계산법 찾는거보다 구현이 빠를 것 같아 시뮬레이션으로 시도
// - 몬스터가 공격할 수 있는 시간이 1초부터 1000초, N이 10^3
//
// 구현
// - 1초부터 마지막 공격 시간까지 (최대 1000초) 조건을 구현하여 실제로 실행시켜보기

class Solution {
    public int solution(int[] bandage, int health, int[][] attacks) {
        int answer = 0;
        int N = attacks[attacks.length-1][0];
        int i = 0;
        int stack = 0; // 누적 시간
        int maxHealth = health; // 최대 체력

        for(int t = 1; t <= N; t++) { // 1초부터 마지막 공격을 받는 시간까지
            if(attacks[i][0] == t) { // 공격을 받는 시간이면
                health -= attacks[i][1];
                stack = 0;
                i++;
            } else { // 공격을 받지 않는 시간이면
                stack++;
                if(stack == bandage[0]) {
                    health += bandage[2]; // 추가 회복
                    stack = 0;
                }
                health += bandage[1]; // 초당 회복
            }
            if(health > maxHealth) health = maxHealth;
            else if(health <= 0) {
                health = -1;
                break;
            }
        }
        return health;
    }
}