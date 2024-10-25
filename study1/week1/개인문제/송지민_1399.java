class Solution {
    public int countLargestGroup(int N) {
        // 최댓값이 9999라 배열의 길이는 36 + 1을 넘지 않음
        int[] arr = new int[37];
        int result = 0;
        int max = 0;
        for(int i = 1; i < N + 1; i++) {
            int sum = 0;
            int num = i;
            while(num > 0) {
                sum += num % 10;
                num = num / 10;
            }
            arr[sum]++;

            if(max < arr[sum]) {
                max = arr[sum];
                result = 1;
            } else if(max == arr[sum]){
                result++;
            }
        }

        return result;
    }
}

// 완전탐색, O(N) = 10^4