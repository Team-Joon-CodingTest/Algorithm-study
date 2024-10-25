class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
        int N = words.length;
        List<Integer> result = new ArrayList<>();
        for(int i = 0; i < N; i++) {
            if(words[i].indexOf(x) != -1)
                result.add(i);
        }
        return result;
    }
}