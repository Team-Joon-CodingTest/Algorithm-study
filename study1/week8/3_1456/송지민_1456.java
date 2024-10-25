class Solution {
    public int maxVowels(String s, int K) {
        int max = 0;
        int N = s.length();
        for(int i = 0; i < K; i++) {
            if(isVowel(s.charAt(i))) max++;
        }

        int baseCount = max;
        for(int i = K; i < N; i++) {
            boolean rightC = isVowel(s.charAt(i));
            boolean leftC = isVowel(s.charAt(i - K));

            if(rightC && !leftC) baseCount++;
            else if(!rightC && leftC) baseCount--;
            max = Math.max(max, baseCount);
        }
        return max;
    }

    // 모음이면 return true;
    private boolean isVowel(char c) {
        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') return true;
        return false;
    }
}