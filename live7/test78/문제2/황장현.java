import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        HashSet<Integer> S = new HashSet<>();
        
        int M = Integer.parseInt(br.readLine()); // 연산 개수 입력

        for (int i = 0; i < M; i++) {
            String[] input = br.readLine().split(" ");
            String command = input[0];
            int num = (input.length > 1) ? Integer.parseInt(input[1]) : 0;

            switch (command) {
                case "add":
                    S.add(num);
                    break;

                case "remove":
                    S.remove(num);
                    break;

                case "check":
                    sb.append(S.contains(num) ? "1\n" : "0\n");
                    break;

                case "toggle":
                    if (S.contains(num))
                        S.remove(num);
                    else
                        S.add(num);
                    break;

                case "all":
                    S.clear();
                    for (int j = 1; j <= 20; j++) {
                        S.add(j);
                    }
                    break;

                case "empty":
                    S.clear();
                    break;
            }
        }

        System.out.print(sb); // 최적화된 출력
    }
}
