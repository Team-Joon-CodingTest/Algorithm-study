import java.util.Stack;
class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        Stack<Integer> bugger = new Stack<>();
        for(int i = 0; i < ingredient.length;i++){
            bugger.push(ingredient[i]);
            if(ingredient[i]==1&&bugger.size()>3){
                if(bugger.get(bugger.size()-2)==3){
                    if(bugger.get(bugger.size()-3)==2){
                        if (bugger.get(bugger.size()-4)==1){
                            bugger.pop();
                            bugger.pop();
                            bugger.pop();
                            bugger.pop();
                            answer++;
                        }
                    }
                }
            }
        }
        return answer;
    }
}
