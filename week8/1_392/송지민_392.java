class Solution {
    public boolean isSubsequence(String s, String t) {
        int N = t.length();
        int index = 0;

        if(s.length() == 0) return true;
        else if(t.length() == 0) return false;

        for(int i = 0; i < N; i++) {
            if(t.charAt(i) == s.charAt(index)) index++;
            if(index == s.length()) return true;
        }

        return index == s.length();
    }
}