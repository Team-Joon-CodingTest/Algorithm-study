import java.util.*;
import java.io.*; 

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;
		
    st = new StringTokenizer(br.readLine());

    int N = Integer.parseInt(st.nextToken());
    int[] input = new int[N];
    int temp = input[0];
    int count = 1;
    int max = 0;

    st = new StringTokenizer(br.readLine());
    for(int i = 0; i < N; i++) {
      input[i] = Integer.parseInt(st.nextToken());
    }
    Arrays.sort(input);

    for(int i = 0; i < N; i++) {

      if(input[i] == temp) {
        count++;
        continue;
      }

      max = Math.max(max, count);
      temp = input[i];
      count = 1;
    }

    System.out.println(Math.max(max, count));
  }
}
