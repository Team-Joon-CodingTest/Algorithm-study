https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

class Solution {
    public int maxProfit(int[] prices) {
        int N = prices.length;
        int min = 10001;
        int result = 0;

        for(int price : prices) {
            min = Math.min(min, price);

            int val = price - min;
            result = Math.max(result, val);
        }
        return result;
    }
}

// 그리디, O(n)