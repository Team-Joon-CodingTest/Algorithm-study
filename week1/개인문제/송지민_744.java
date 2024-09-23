class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        Arrays.sort(letters);

        for(char alpa : letters) {
            if(target < alpa) return alpa;
        }

        return letters[0];
    }
}

// 정렬, 완전탐, O(n) -> 10^4