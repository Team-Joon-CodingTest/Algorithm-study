public class Solution {
    public int uniquePaths(int m, int n) {
        int[][] grid = new int[m][n];
        for(int i = 0; i<m; i++){
            for(int j = 0; j<n; j++){
                if(i==0||j==0)
                    grid[i][j] = 1;
                else
                    grid[i][j] = grid[i][j-1] + grid[i-1][j];
            }
        }
        return grid[m-1][n-1];
    }
}
//https://leetcode.com/problems/unique-paths/solutions/405983/easy-understand-java-solutions-with-explanations-dp-top-down-bottom-up-linear-space/?envType=study-plan-v2&envId=leetcode-75