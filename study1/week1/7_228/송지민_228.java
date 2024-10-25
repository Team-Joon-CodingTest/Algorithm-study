class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> list = new LinkedList();
        Deque<Integer> q = new LinkedList();
        int N = nums.length;
        String str = "";

        if(N == 0) return list;
        for(int i = 0; i < N; i++) {
            int num = nums[i];
            if(q.isEmpty() || num == q.peekLast() + 1) q.offer(num);
            else addList(list, q, str, num);
        }
        addList(list, q, str, 0);
        return list;
    }

    private void addList(List<String> list, Deque<Integer> q, String str, int num) {
        String start = Integer.toString(q.peekFirst());
        String end = Integer.toString(q.peekLast());

        if(start.equals(end)) str = start;
        else str = start + "->" + end;

        q.clear();
        q.offer(num);
        list.add(str);
        str = "";

        return;
    }
}

// 구현, O(n) -> 20