package live7.test78.문제2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 최지혜 {
    public static void main(String[]args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int s = 0;
        int m = Integer.parseInt(br.readLine());

        StringTokenizer st;
        while(m --> 0){
            st = new StringTokenizer(br.readLine());
            String str = st.nextToken();
            if(str.equals("all")) {
                s = (1 << 21) -1;
            }
            else if(str.equals("empty")){
                s = 0;
            }
            else{
                int num = Integer.parseInt(st.nextToken());
                if(str.equals("add")){
                    s |= (1 << num);
                }
                else if(str.equals("remove"))
            }

        }
    }
    
}
