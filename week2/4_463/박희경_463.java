class Solution {
    public int islandPerimeter(int[][] grid) {
        int count = 0;
        int neighbours = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 1) {
                    count++;
                    if (i < grid.length - 1 && grid[i + 1][j] == 1) { // 아래에 땅이 접해있을 때
                        neighbours++;
                    }
                    if (j < grid[i].length - 1 && grid[i][j + 1] == 1) { // 오른쪽에 접해있을 때
                        neighbours++;
                    }
                }
            }
        }
        return count * 4 - neighbours * 2;
    }
}