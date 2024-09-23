class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        boolean[] check = new boolean[1001];
        LinkedList<Integer> list = new LinkedList();
        for(int i = 0; i < nums1.length; i++) {
            for(int j = 0; j < nums2.length; j++) {
                int n1 = nums1[i];
                if(!check[n1] && n1 == nums2[j]) {
                    check[n1] = true;
                    list.add(n1);
                }
            }
        }

        int size = list.size();
        int[] result = new int[size];
        for(int i = 0; i < size; i++) {
            result[i] = list.get(i);
        }

        return result;
    }
}