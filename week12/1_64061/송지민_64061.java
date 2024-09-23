// 접근
// - 단순 구현
//
// 구현
// - 뽑기 특성상 위에서부터 차례대로 인형이 뽑혀가기 때문에 큐로 이루어진 리스트로 격자를 구현
// - 반대로 바구니는 마지막에 있는 인형을 확인해야하므로 스택으로 구현

import java.util.*;
class Solution {
    public int solution(int[][] board, int[] moves) {
        int N = board.length;
        List<Queue<Integer>> list = new LinkedList();

        for(int i = 0; i < N; i++) {
            list.add(new LinkedList());
        }

        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                if(board[i][j] != 0) {
                    list.get(j).add(board[i][j]);
                }
            }
        }

        Stack<Integer> stack = new Stack();
        stack.push(-1);
        int answer = 0;
        for(int i = 0; i < moves.length; i++) {
            Integer doll = list.get(moves[i] - 1).poll();
            if(doll == null) continue;
            if(stack.peek() != -1 && stack.peek() == doll) {
                stack.pop();
                answer+=2;
            }
            else {
                stack.push(doll);
            }

        }
        return answer;
    }
}