class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        HashMap<Integer,Integer> map = new HashMap();
        int N = nums.length;
        List<Integer> list = new LinkedList();

        for(int num : nums) {
            Integer count = map.get(num);
            if(count == null) {
                map.put(num, 1);
            } else {
                map.put(num, 2);
            }
        }

        for(int i = 1; i <= N; i++) {
            Integer count = map.get(i);
            if(count != null && count == 2) list.add(i);
        }
        return list;
    }
}

// 자료구조, O(N) -> 2 * 10^5