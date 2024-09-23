class Solution {
    public int maxDistance(int[] colors) {
        int newStart = Integer.MAX_VALUE;
        int result = 1;
        int startColor = colors[0];
        int N = colors.length;

        for(int i = 1; i < N; i++) {
            // 처음부터 초록색까지
            if(startColor != colors[i]) {
                // 색깔 초기화
                newStart = Math.min(i, newStart);
                result = i;
            }
            // 빨강부터 끝까지
            else result = Math.max(result, i - newStart);
        }
        return result;
    }
}
