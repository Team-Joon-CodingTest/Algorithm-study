import java.util.*;

class Solution {

    public int solution(int[] nums) {
        int answer = 0;
        HashSet<Integer> set = new HashSet();
        for(int i = 0; i<nums.length; i++){
            set.add(nums[i]);
        }
        int length =  nums.length /2;
        int setLength = set.size();
        if(setLength > length) answer = length;
        else answer = setLength;
        return answer;
    }
}