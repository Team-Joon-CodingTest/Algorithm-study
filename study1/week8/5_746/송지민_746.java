class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int N = cost.length;
        int[] arr = new int[N];

        arr[N-1] = cost[N-1];
        arr[N-2] = cost[N-2];

        if(N == 2) return Math.min(arr[0], arr[1]);

        for(int i = N - 3; i >= 0; i--) {
            int min = Math.min(arr[i+1], arr[i+2]);
            arr[i] = cost[i] + min;
        }

        return Math.min(arr[0], arr[1]);
    }
}