class Solution {
    public int[] replaceElements(int[] arr) {
        int N = arr.length;
        int[] resultArr = new int[N];

        for(int i = 0; i < N - 1; i++) {
            int max = arr[i+1];
            for(int j = i+1; j < N; j++) {
                max = Math.max(max, arr[j]);
            }
            resultArr[i] = max;
        }
        resultArr[N - 1] = -1;
        return resultArr;
    }
}