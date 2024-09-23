class Solution {
    public int distributeCandies(int[] candyType) {
        int candyCount, typeCount;
        Set<Integer> types = new HashSet<>();

        for (int type : candyType) {
            types.add(type);
        }

        candyCount = candyType.length / 2;
        typeCount = types.size();

        return Math.min(candyCount, typeCount);
    }
}