import java.util.*;
class Solution {
    public String solution(String number, int k) {
        char[] result = new char[number.length() - k];
        Stack<Character> stack = new Stack();
        for(char num : number.toCharArray()){
            while (!stack.empty() && stack.peek() < num && k > 0){
                stack.pop();
                k--;
            }
            stack.push(num);
        }

        for(int i=0; i<result.length; i++){
            result[i] = stack.get(i);
        }

        return new String(result);
    }
}
//https://school.programmers.co.kr/learn/courses/30/lessons/42883