class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
        int N = words.length;
        String X = String.valueOf(x);
        List<Integer> list = new LinkedList();
        for(int i = 0; i < N; i++) {
            String str = words[i];
            if(str.contains(X)) list.add(i);
        }

        return list;
    }
}
// 완전탐색, O(N^2) = 2500