class Solution {
    public int minPathSum(int[][] grid) {
        int R = grid.length - 1;
        int C = grid[0].length - 1;
        int[][] dp = new int[R+1][C+1];
        dp[0][0] = grid[0][0];
        for(int i = 1; i <= C; i++) {
            dp[0][i] = grid[0][i] + dp[0][i-1];
        }
        for(int i = 1; i <= R; i++) {
            dp[i][0] = grid[i][0] + dp[i-1][0];
        }

        for(int i = 1; i <= R; i++) {
            for(int j = 1; j <= C; j++) {
                int left = dp[i][j-1];
                int up = dp[i-1][j];

                int min = Math.min(left,up);
                dp[i][j] = grid[i][j] + min;
            }
        }

        return  dp[R][C];
    }
}