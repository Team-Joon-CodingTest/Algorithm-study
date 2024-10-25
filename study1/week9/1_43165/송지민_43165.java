class Solution {
    static int answer;
    public int solution(int[] numbers, int target) {
        this.answer = 0;

        dfs(numbers, target, 0, 0);

        return answer;
    }

    private void dfs(int[] number, int target, int depth, int sum) {
        if(depth == number.length) {
            if(sum == target) {
                answer++;
            }
            return;
        }

        dfs(number, target, depth+1, sum + number[depth]);
        dfs(number, target, depth+1, sum - number[depth]);
    }
}