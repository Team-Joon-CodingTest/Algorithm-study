class Solution {
    public boolean divisorGame(int n) {
        // return n%2 == 0; // 매우 단순한 풀이

        boolean[] dp = new boolean[n+1];

        dp[0] = false;
        if(n>=1) {
            dp[1] = false;
        }
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j < i; j++) {
                if (i % j == 0 && !dp[i - j]) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n];
    }
}