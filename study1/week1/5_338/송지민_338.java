class Solution {
    public int[] countBits(int N) {
        int[] result = new int[N + 1];
        int num = 2;
        int index = 0;
        if(N == 0) return result;
        result[1] = 1;

        for(int i = 2; i < N + 1; i++) {
            if(i == num) {
                num *= 2;
                index = 0;
            }
            result[i] = result[index] + 1;
            index++;
        }
        return result;
    }
}

// DP, O(n) -> 10^5