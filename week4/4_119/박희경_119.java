class Solution {
    public List<Integer> getRow(int rowIndex) {
        int length = rowIndex + 1;
        HashMap<Integer, List<Integer>> result = new HashMap<>();
        List<Integer> values = new ArrayList<>();
        values.add(1);
        result.put(0, new ArrayList<>(values));

        int idx = 1;
        while(idx <= rowIndex) {
            pascal(idx, values);
            result.put(idx, new ArrayList<>(values));
            idx++;
        }
        return result.get(rowIndex);
    }

    void pascal(int idx, List<Integer> values) {
        values.add(0, 1);
        for (int i = 1; i < idx; i++) {
            values.set(i, values.get(i) + values.get(i + 1));
        }
    }
}