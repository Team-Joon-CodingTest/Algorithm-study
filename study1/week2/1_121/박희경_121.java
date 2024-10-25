class Solution {
    public int maxProfit(int[] prices) {
        int size = prices.length;

        int min = Integer.MAX_VALUE;
        int max = 0;

        for (int i = 0; i < size; i++) {
            if(min > prices[i]) {
                min = prices[i];
            }
            else if (prices[i] - min > max) {
                max = prices[i] - min;
            }
        }
        return max;
    }
}