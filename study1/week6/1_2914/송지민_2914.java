class Solution {
    public int minChanges(String s) {
        int N = s.length();
        int result = 0;

        for(int i = 1; i < N; i+=2) {
            if(s.charAt(i) != s.charAt(i-1)) result++;
        }

        return result;
    }
}