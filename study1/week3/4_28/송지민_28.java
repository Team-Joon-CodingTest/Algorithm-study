class Solution {
    public int strStr(String haystack, String needle) {
        int windowSize = needle.length();
        int N = haystack.length();

        int result = -1;

        for(int i = 0; i <= N - windowSize; i++) {
            String str = haystack.substring(i, i + windowSize);
            if(str.equals(needle)) {
                result = i;
                break;
            }
        }
        return result;
    }
}