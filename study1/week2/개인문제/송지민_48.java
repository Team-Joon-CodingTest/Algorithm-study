https://leetcode.com/problems/rotate-image/description/

class Solution {
    public void rotate(int[][] matrix) {
        int N = matrix.length;
        int[][] result = new int[N][N];

        for(int i = 0; i < N; i++) {
            result[i] = matrix[i].clone();
        }

        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                matrix[i][j] = result[N-1-j][i];
            }
        }
    }
}