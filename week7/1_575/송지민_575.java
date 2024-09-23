class Solution {
    public int distributeCandies(int[] candyType) {
        HashSet<Integer> set = new HashSet();
        int maximum = candyType.length / 2;
        for(int candy: candyType) {
            set.add(candy);
        }

        return set.size() < maximum ? set.size() : maximum;
    }
}